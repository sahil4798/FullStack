import { PrismaClient } from "@prisma/client";

console.log("Inside in db.ts file");
const prismaClientSingleton = () => {
  console.log("Prisma client instances");
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
