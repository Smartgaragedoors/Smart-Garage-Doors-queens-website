-- Lead intake: platform registry and job records.
-- Idempotent — safe to run multiple times.

create table if not exists public.lead_platforms (
  id         uuid primary key default gen_random_uuid(),
  label      text not null,
  code       text not null,
  value      text not null unique,
  created_at timestamptz not null default now()
);

insert into public.lead_platforms (label, code, value) values
  ('Thumbtack', 'TT',   'thumbtack'),
  ('Angies',    'ANGI', 'angies'),
  ('Networx',   'NX',   'networx'),
  ('Website',   'WEB',  'website')
on conflict (value) do update set
  label = excluded.label,
  code  = excluded.code;

create table if not exists public.all_jobs (
  id               uuid primary key default gen_random_uuid(),
  platform_id      uuid references public.lead_platforms(id),
  platform_value   text not null,
  external_lead_id text,
  first_name       text,
  last_name        text,
  phone            text,
  email            text,
  address          text,
  service_type     text,
  message          text,
  campaign         text,
  source_url       text,
  raw_payload      jsonb,
  created_at       timestamptz not null default now()
);

-- Dedup index: one row per (platform, external_lead_id)
create unique index if not exists idx_all_jobs_platform_ext_id
  on public.all_jobs (platform_value, external_lead_id)
  where external_lead_id is not null;

create index if not exists idx_all_jobs_created_at
  on public.all_jobs (created_at desc);

create index if not exists idx_all_jobs_platform_value
  on public.all_jobs (platform_value);
