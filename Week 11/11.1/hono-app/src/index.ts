import { Hono } from "hono";

const app = new Hono();

const authMiddleware = async (c: any, next: any) => {
  if (c.req.header("authorization")) {
    console.log("indide middleware");
    await next();
  } else {
    return c.json({ message: "token is not provided" });
  }
};

// app.use(authMiddleware);

app.get("/", authMiddleware, (c) => {
  return c.text("Hello Hono!");
});

app.post("/users", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  // console.log(c.req.header("Authorization"));
  // console.log(c.req.header()); //this will give you whole headers object
  // console.log(c.req.query("username"));
  // console.log(c.req.param("id"));
  return c.json({ message: "response from post request" });
});

export default app;
