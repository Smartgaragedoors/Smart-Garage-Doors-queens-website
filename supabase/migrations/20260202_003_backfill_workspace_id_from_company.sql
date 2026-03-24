-- Phase 1 backfill: map each existing company_id to one default workspace.
-- Idempotent and safe to re-run.

with legacy_companies as (
  select distinct company_id
  from public.links
  where company_id is not null
),
created_workspaces as (
  insert into public.workspaces (name, slug)
  select
    'Workspace ' || left(company_id::text, 8),
    'ws-' || left(company_id::text, 8)
  from legacy_companies lc
  where not exists (
    select 1
    from public.company_workspace_map cwm
    where cwm.company_id = lc.company_id
  )
  returning id, name, slug
),
pending_map as (
  select
    lc.company_id,
    w.id as workspace_id
  from legacy_companies lc
  join public.workspaces w
    on w.slug = ('ws-' || left(lc.company_id::text, 8))
  where not exists (
    select 1 from public.company_workspace_map cwm where cwm.company_id = lc.company_id
  )
)
insert into public.company_workspace_map (company_id, workspace_id)
select company_id, workspace_id
from pending_map
on conflict (company_id) do nothing;

update public.links l
set workspace_id = cwm.workspace_id
from public.company_workspace_map cwm
where l.company_id = cwm.company_id
  and l.workspace_id is null;

update public.click_events ce
set workspace_id = cwm.workspace_id
from public.company_workspace_map cwm
where ce.company_id = cwm.company_id
  and ce.workspace_id is null;

