// import { PrismaClient } from "@repo/db/client";
// const prisma = new PrismaClient();

import { value } from "@repo/db/value";
import { PrismaClient } from "@repo/db/value";

export function GET() {
  return Response.json({ message: "abcd", value });
}

export async function POST() {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      email: "jack@gmail.com",
    },
  });
  console.log(user);
  return Response.json({ message: "cerate", user });
  // return Response.json({ message: "abcd" });
}
