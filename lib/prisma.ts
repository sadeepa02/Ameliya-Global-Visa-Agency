/*import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}*/
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const accelerateUrl = process.env.DATABASE_URL;

if (!accelerateUrl) {
  throw new Error(
    "DATABASE_URL is missing. Add it to your .env.local (Prisma Accelerate connection string)."
  );
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    // Prisma 7 requires passing the Accelerate URL when the datasource
    // URL is defined in prisma.config.ts instead of schema.prisma.
    accelerateUrl,
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
