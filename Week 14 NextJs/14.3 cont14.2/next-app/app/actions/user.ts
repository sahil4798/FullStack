"use server";

import client from "@/db";

export async function signup(username: string, password: string) {
  try {
    const user = await client.user.create({
      data: { username, password },
    });
    if (user) {
    }
    return true;
    //it is not returning response corretly If if you are using bad email "NNLKJfcnioenfekna@gmail.",
    // probably we need something like zod validation to verify or parse data commming from user
  } catch (err) {
    return false;
  }
}
