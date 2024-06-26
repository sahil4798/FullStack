import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

import { signupInput, signinInput } from "@aahil07/medium-common";

const userRoute = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
}>();

userRoute.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userData = await c.req.json();

  const { success } = signupInput.safeParse(userData);

  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid or IncorrecT data" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: userData.password,
        name: userData.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "Sign-up page", token: token });
  } catch (error) {
    return c.json({ message: "error while puting data inside database" });
  }
});

userRoute.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid or Incorrect dataaaaaa" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: { email: body.email, password: body.passsword },
    });
    console.log(user);

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "signin Successfull", token });
  } catch (error) {
    c.status(411);
    return c.json({ message: "error while finding  data inside database" });
  }
});

export default userRoute;
