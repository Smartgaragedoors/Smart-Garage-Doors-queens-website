-- Phase 1 (additive): add nullable workspace_id to tracking tables.
-- Backward compatible: company_id remains intact.

alter table if exists public.links
  add column if not exists workspace_id uuid references public.workspaces(id) on delete set null;

alter table if exists public.click_events
  add column if not exists workspace_id uuid references public.workspaces(id) on delete set null;

create index if not exists idx_links_workspace_id on public.links(workspace_id);
create index if not exists idx_click_events_workspace_id on public.click_events(workspace_id);

-- Helpful for Phase 1 lookups and future per-tenant reporting.
create index if not exists idx_links_company_id on public.links(company_id);
create index if not exists idx_click_events_company_id on public.click_events(company_id);

