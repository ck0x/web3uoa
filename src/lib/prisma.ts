import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const normalizeDatabaseUrl = (value?: string) => {
  if (!value) return undefined;
  return value.trim().replace(/^['\"]+|['\"]+$/g, "");
};

const prismaClientSingleton = () => {
  const databaseUrl = normalizeDatabaseUrl(process.env.DATABASE_URL);

  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  let protocol: string;
  try {
    protocol = new URL(databaseUrl).protocol;
  } catch {
    throw new Error(
      "DATABASE_URL is invalid. Check for extra quotes or invalid characters.",
    );
  }

  if (protocol !== "postgresql:" && protocol !== "postgres:") {
    throw new Error(
      "DATABASE_URL must start with postgresql:// or postgres://",
    );
  }

  const pool = new Pool({ connectionString: databaseUrl });
  const adapter = new PrismaPg(pool);
  const client = new PrismaClient({ adapter });
  return client;
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
