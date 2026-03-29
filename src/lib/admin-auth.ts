const SPLIT_PATTERN = /[\s,]+/;

function parseAdminAddresses(raw?: string): Set<string> {
  if (!raw) return new Set();

  return new Set(
    raw
      .split(SPLIT_PATTERN)
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean),
  );
}

export function getConfiguredAdminAddresses(): Set<string> {
  const allowlist =
    process.env.NEXT_PUBLIC_ADMIN_ADDRESSES ??
    process.env.NEXT_PUBLIC_ADMIN_ADDRESS ??
    "";

  return parseAdminAddresses(allowlist);
}

export function isAllowedAdminAddress(address?: string | null): boolean {
  if (!address) return false;
  const allowed = getConfiguredAdminAddresses();
  if (allowed.size === 0) return false;

  return allowed.has(address.toLowerCase());
}
