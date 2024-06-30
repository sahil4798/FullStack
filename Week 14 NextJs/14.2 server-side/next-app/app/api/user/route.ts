import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function GET() {
  return Response.json({
    name: "jack sher",
    email: "jack@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // console.log(body);

  try {
    const user = await prisma.user.create({
      data: { username: body.username, password: body.password },
    });
    console.log(user);
    if (user) {
      return Response.json({ id: user.id });
    }
  } catch (err) {
    return Response.json({ message: "Error while puting data in database" });
  }

  return Response.json({
    name: "jack sher",
    email: "jack@gmail.com",
  });
}
