import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
// import { Bindings } from "hono/types";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
}>();

app.use("/api/v1/blog/*", async (c: any, next) => {
  // console.log("gii from middleware");
  const auth = c.req.header("authorization") || "";
  if (!auth) {
    return c.json({ error: "No token provided" });
  }
  const token = auth.split(" ")[1];

  try {
    const decoded = await verify(token, c.env.JWT_SECRET);
    console.log(decoded);
    c.req.id = decoded.id;
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ message: "Incorrect token" });
  }
});

app.get("/", (c) => {
  return c.text("Hello BCWasa");
});

app.post("api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userData = await c.req.json();

  try {
    const { email, name, passsword } = userData;
    const user = await prisma.user.create({
      data: {
        ...userData,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "Sign-up page", token: token });
  } catch (error) {
    return c.json({ message: "error while puting data inside database" });
  }
});

app.post("api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  console.log(body);

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

app.post("api/v1/blog", (c: any) => {
  console.log(c.req.id);
  return c.text("blog page");
});

app.put("api/v1/blog", (c) => {
  return c.json({ message: "edit blog here" });
});
app.get("api/v1/blog/:id", (c) => {
  return c.text("see a particular blog with id");
});

export default app;
