-- ============================================================================
-- RLS REMEDIATION PLAN — DO NOT AUTO-APPLY
-- ============================================================================
-- This file is intentionally OUTSIDE supabase/migrations/ so it is never run
-- automatically. Apply manually, in stages, after the validation steps below.
--
-- WHY: Supabase advisors flagged Row-Level Security DISABLED on tables that are
-- fully readable/writable by anyone holding the public anon key.
--
-- KEY SAFETY FACT (audited):
--   * The website (src/) uses NO client-side Supabase — no anon-key reads.
--   * All API routes use SERVICE_ROLE keys, which BYPASS RLS.
--   => Enabling RLS will NOT break the website or the API.
--   => The only consumer affected is the separate CRM app (authenticated users:
--      owner/admin/technician via public.profiles), so its tables need policies
--      that mirror the EXISTING protected tables (all_jobs, payments, invoices).
--
-- ROLLBACK for any table: ALTER TABLE <t> DISABLE ROW LEVEL SECURITY;
-- ============================================================================


-- ============================================================================
-- PROJECT A: Site  (vdotbxzamrbugpqmjucy)  — 3 tables
-- ============================================================================

-- google_reviews (10 rows) — displayed publicly, so keep public READ only.
ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read google_reviews"
  ON public.google_reviews FOR SELECT
  TO anon, authenticated
  USING (true);
-- (writes happen via service_role, which bypasses RLS — no write policy needed)

-- notification_settings / notification_logs (0 rows) — server-only.
ALTER TABLE public.notification_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_logs     ENABLE ROW LEVEL SECURITY;
-- No policies: anon/authenticated get zero access; service_role bypasses RLS.


-- ============================================================================
-- PROJECT B: SGD-CRM  (aerjjipeapxqbewnhyva)  — 18 exposed tables
-- ----------------------------------------------------------------------------
-- Baseline applied to ALL: enable RLS + owner/admin full-manage policy,
-- mirroring the existing "Owners and admins manage ..." policies. Service-role
-- API access is unaffected (bypasses RLS). Technician-specific READ policies
-- are added ONLY where the CRM technician UI needs them (see Stage 2).
-- ============================================================================

-- ---- Reusable predicate (owner/admin) ----
--   EXISTS (SELECT 1 FROM profiles p
--           WHERE p.id = auth.uid()
--             AND (p.is_admin = true OR p.role = ANY (ARRAY['owner','admin'])))

-- ===== STAGE 1: enable RLS + owner/admin manage on all 18 =====
DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'customers','settings','lead_platforms','job_stages','job_types','profiles',
    'notifications','push_subscriptions','data_quality_flags','external_partners',
    'data_quality_approvals','contractors','messages','conversation_participants',
    'manual_override_backup','override_backup_20250122','customer_conversations',
    'customer_messages'
  ]
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', t);
    EXECUTE format($f$
      CREATE POLICY "Owners and admins manage %1$s"
        ON public.%1$I FOR ALL
        USING (EXISTS (SELECT 1 FROM public.profiles p
                       WHERE p.id = auth.uid()
                         AND (p.is_admin = true OR p.role = ANY (ARRAY['owner','admin']))))
        WITH CHECK (EXISTS (SELECT 1 FROM public.profiles p
                       WHERE p.id = auth.uid()
                         AND (p.is_admin = true OR p.role = ANY (ARRAY['owner','admin']))));
    $f$, t);
  END LOOP;
END $$;

-- NOTE on profiles: the owner/admin policy references profiles itself. A user
-- must be able to read their OWN profile row for auth.uid() lookups to resolve.
-- Add a self-read policy so the predicate works:
CREATE POLICY "Users read own profile"
  ON public.profiles FOR SELECT
  USING (id = auth.uid());

-- ===== STAGE 2 (apply only if technician CRM UI needs these reads) =====
-- Determine by testing the CRM app logged in AS A TECHNICIAN (see plan below).
-- Technicians typically need to read the customer + conversation tied to jobs
-- assigned to them. Example (customers via assigned jobs):
--
-- CREATE POLICY "Technicians read customers on assigned jobs"
--   ON public.customers FOR SELECT
--   USING (EXISTS (
--     SELECT 1 FROM public.all_jobs j
--     JOIN public.technicians t ON t.user_id = auth.uid()
--     WHERE j.customer_id = customers.id
--       AND (j.technician_id = t.id
--            OR (j.technician_ids IS NOT NULL AND t.id = ANY (j.technician_ids))
--            OR EXISTS (SELECT 1 FROM public.job_assignments ja
--                       WHERE ja.job_id = j.id AND ja.technician_id = t.id))));
--
-- Repeat the same shape for customer_conversations / customer_messages
-- (join via job_id) and notifications (filter by recipient user_id) ONLY if the
-- technician UI surfaces them. Backup tables (manual_override_backup,
-- override_backup_20250122) should get NO read policy — service-role only.

-- ============================================================================
-- SAFE DEPLOYMENT PLAN
-- ============================================================================
-- 0. Take a fresh DB backup / confirm PITR is on.
-- 1. Apply PROJECT A (site) first — lowest risk; verify the site still shows
--    reviews and the site loads.
-- 2. Apply PROJECT B STAGE 1 during a low-traffic window.
-- 3. Smoke-test the CRM app with TWO logins:
--      a. owner/admin  -> must see/manage everything (customers, jobs, msgs).
--      b. technician   -> open an assigned job; note any data that fails to load
--         (customer details, conversation, notifications). Each failure => add
--         the matching STAGE 2 technician policy, then re-test.
-- 4. Confirm website + API lead intake still work (they use service_role, so
--    they should be unaffected).
-- 5. If anything critical breaks and can't be fixed quickly:
--      ALTER TABLE public.<table> DISABLE ROW LEVEL SECURITY;  -- instant rollback
-- ============================================================================
