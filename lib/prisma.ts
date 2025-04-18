import { PrismaClient } from "@/generated/prisma"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Optional: logs Prisma queries to the terminal
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
