-- App-level feature flag settings, managed by admin/owner via the CRM settings UI.
-- Values are stored as text; booleans use 'true'/'false'.
-- Falls back to environment variables when a key has no row.

create table if not exists app_settings (
  key        text        primary key,
  value      text        not null default 'false',
  updated_at timestamptz not null default now(),
  updated_by uuid        references auth.users(id) on delete set null
);

alter table app_settings enable row level security;

-- Drop existing policies so this script is safe to re-run
drop policy if exists "admin_owner_select_app_settings"  on app_settings;
drop policy if exists "admin_owner_insert_app_settings"  on app_settings;
drop policy if exists "admin_owner_update_app_settings"  on app_settings;
drop policy if exists "service_role_read_app_settings"   on app_settings;

create policy "admin_owner_select_app_settings"
  on app_settings for select
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and (profiles.role in ('admin', 'owner') or profiles.is_admin = true)
    )
  );

create policy "admin_owner_insert_app_settings"
  on app_settings for insert
  with check (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and (profiles.role in ('admin', 'owner') or profiles.is_admin = true)
    )
  );

create policy "admin_owner_update_app_settings"
  on app_settings for update
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
        and (profiles.role in ('admin', 'owner') or profiles.is_admin = true)
    )
  );

create policy "service_role_read_app_settings"
  on app_settings for select
  using (auth.role() = 'service_role');
