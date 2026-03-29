export const NAMESTONE_API_URL = "https://namestone.com/api/public_v1";

interface SetNameParams {
  domain: string;
  name: string;
  address: string;
}

export async function setName({ domain, name, address }: SetNameParams) {
  const apiKey = process.env.NAMESTONE_API_KEY;
  if (!apiKey) throw new Error("NAMESTONE_API_KEY not configured");

  const response = await fetch(`${NAMESTONE_API_URL}/set-name`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({
      domain,
      name,
      address,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`NameStone API error: ${text}`);
  }

  return response.json();
}

export async function deleteName({
  domain,
  name,
}: {
  domain: string;
  name: string;
}) {
  const apiKey = process.env.NAMESTONE_API_KEY;
  if (!apiKey) throw new Error("NAMESTONE_API_KEY not configured");

  const response = await fetch(`${NAMESTONE_API_URL}/delete-name`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({
      domain,
      name,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`NameStone API error: ${text}`);
  }

  return response.json();
}

export async function getNames(domain: string, limit = 50) {
  const apiKey = process.env.NAMESTONE_API_KEY;
  if (!apiKey) throw new Error("NAMESTONE_API_KEY not configured");

  const url = new URL(`${NAMESTONE_API_URL}/get-names`);
  url.searchParams.append("domain", domain);
  url.searchParams.append("limit", limit.toString());

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`NameStone API error: ${text}`);
  }

  return response.json();
}
