-- Phase 1 (additive): workspace tenant foundation.
-- Backward compatible: does NOT remove or alter company_id behavior.

create extension if not exists pgcrypto;

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workspace_users (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null,
  role text not null default 'member' check (role in ('owner', 'admin', 'member', 'viewer')),
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create index if not exists idx_workspace_users_user_id on public.workspace_users(user_id);

-- Phase 1 utility table: deterministic mapping from legacy company_id -> workspace_id.
-- Keeps migration idempotent and auditable.
create table if not exists public.company_workspace_map (
  company_id uuid primary key,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  created_at timestamptz not null default now()
);

