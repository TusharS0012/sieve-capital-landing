create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create policy "Users can read own roles"
on public.user_roles for select to authenticated
using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  certificate_code text not null unique,
  holder_name text not null,
  program text not null,
  role_title text,
  start_date date,
  end_date date,
  issued_on date not null default current_date,
  mentor text,
  status text not null default 'valid',
  notes text,
  created_by uuid,
  created_at timestamptz not null default now()
);

create index certificates_code_idx on public.certificates (certificate_code);

grant select on public.certificates to anon;
grant select, insert, update, delete on public.certificates to authenticated;
grant all on public.certificates to service_role;

alter table public.certificates enable row level security;

create policy "Anyone can verify certificates"
on public.certificates for select
using (true);

create policy "Admins can insert certificates"
on public.certificates for insert to authenticated
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update certificates"
on public.certificates for update to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete certificates"
on public.certificates for delete to authenticated
using (public.has_role(auth.uid(), 'admin'));
