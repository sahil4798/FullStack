import { Context, Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@aahil07/medium-common";

const blogRoute = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
  Variables: { userId: string };
}>();

blogRoute.use("/*", async (c: any, next) => {
  const auth = c.req.header("authorization") || "";
  if (!auth) {
    return c.json({ error: "No token provided" });
  }
  const token = auth.split(" ")[1];

  try {
    const decoded = await verify(token, c.env.JWT_SECRET);
    if (decoded) {
      c.set("userId", decoded.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in",
      });
    }
  } catch (error) {
    c.status(403);
    return c.json({ message: "Incorrect token" });
  }
});

blogRoute.post("/", async (c: any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const authorId = c.get("userId");

  const { success } = createBlogInput.safeParse({
    title: body.title,
    content: body.content,
  });

  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid blog input" });
  }

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    });
    return c.json({ message: "post created", id: blog.id });
  } catch (error) {
    c.status(401);
    return c.json({ message: "Error while pushing post in database" });
  }
});

blogRoute.put("/", async (c: any) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse({
    title: body.title,
    content: body.content,
    id: body.id,
  });

  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid blog update-input" });
  }

  try {
    const blog = await prisma.post.update({
      where: { id: Number(body.id) },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ message: "Successfully updated", data: blog });
  } catch (error) {
    c.status(401);
    return c.json({ message: "Error while pushing post in database" });
  }
});

blogRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ blogs });
  } catch (error) {
    c.status(401);
    return c.json({ message: "Error while finding posts in database" });
  }
});

blogRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { id } = c.req.param();

  try {
    const blog = await prisma.post.findFirst({
      where: { id: Number(id) },
      select: {
        id: true,
        content: true,
        title: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ blog });
  } catch (error) {
    c.status(401);
    return c.json({ message: "Error while finding post in database" });
  }
});

export default blogRoute;
