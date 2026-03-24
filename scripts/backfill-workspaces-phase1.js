import { createClient } from '@supabase/supabase-js';

/**
 * Phase 1 backfill runner (idempotent):
 * - Ensure one workspace per legacy company_id
 * - Fill links.workspace_id and click_events.workspace_id
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-workspaces-phase1.js
 */

const supabaseUrl = process.env.SUPABASE_URL?.trim();
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function workspaceSlugForCompany(companyId) {
  return `ws-${String(companyId).slice(0, 8)}`;
}

function workspaceNameForCompany(companyId) {
  return `Workspace ${String(companyId).slice(0, 8)}`;
}

async function main() {
  const { data: links, error: linksError } = await supabase
    .from('links')
    .select('company_id')
    .not('company_id', 'is', null);

  if (linksError) throw linksError;

  const companyIds = [...new Set((links ?? []).map((r) => r.company_id).filter(Boolean))];
  console.log(`Found ${companyIds.length} unique company_id values in links.`);

  for (const companyId of companyIds) {
    const slug = workspaceSlugForCompany(companyId);
    const name = workspaceNameForCompany(companyId);

    const { data: existingMap } = await supabase
      .from('company_workspace_map')
      .select('company_id, workspace_id')
      .eq('company_id', companyId)
      .maybeSingle();

    let workspaceId = existingMap?.workspace_id ?? null;

    if (!workspaceId) {
      const { data: workspace, error: wsError } = await supabase
        .from('workspaces')
        .insert({ name, slug })
        .select('id')
        .single();

      if (wsError && wsError.code !== '23505') throw wsError;

      if (!workspace?.id) {
        const { data: bySlug, error: fetchError } = await supabase
          .from('workspaces')
          .select('id')
          .eq('slug', slug)
          .single();
        if (fetchError) throw fetchError;
        workspaceId = bySlug.id;
      } else {
        workspaceId = workspace.id;
      }

      const { error: mapError } = await supabase
        .from('company_workspace_map')
        .upsert({ company_id: companyId, workspace_id: workspaceId }, { onConflict: 'company_id' });

      if (mapError) throw mapError;
    }

    const { error: linksUpdateError } = await supabase
      .from('links')
      .update({ workspace_id: workspaceId })
      .eq('company_id', companyId)
      .is('workspace_id', null);

    if (linksUpdateError) throw linksUpdateError;

    const { error: eventsUpdateError } = await supabase
      .from('click_events')
      .update({ workspace_id: workspaceId })
      .eq('company_id', companyId)
      .is('workspace_id', null);

    if (eventsUpdateError) throw eventsUpdateError;
  }

  const [{ count: nullLinks }, { count: nullEvents }] = await Promise.all([
    supabase.from('links').select('*', { count: 'exact', head: true }).is('workspace_id', null),
    supabase.from('click_events').select('*', { count: 'exact', head: true }).is('workspace_id', null),
  ]);

  console.log('Backfill complete.');
  console.log(`links.workspace_id NULL rows remaining: ${nullLinks ?? 'unknown'}`);
  console.log(`click_events.workspace_id NULL rows remaining: ${nullEvents ?? 'unknown'}`);
}

main().catch((error) => {
  console.error('Backfill failed:', error.message ?? error);
  process.exit(1);
});

