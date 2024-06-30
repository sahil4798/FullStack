import { NextRequest, NextResponse } from "next/server";

import client from "@/db";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const user = await client.user.create({
      data: { username: body.username, password: body.password },
    });
    console.log(user);
    if (user) {
      return NextResponse.json({ id: user.id });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Error while puting data in database" },
      { status: 411 }
    );
  }

  return NextResponse.json({
    name: "jack sher",
    email: "jack@gmail.com",
  });
}
