import express, { response } from "express";
import zod from "zod";

import { PrismaClient } from "@prisma/client";
const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("you landed on home page");
});

const signupSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

app.post("/signup", async (req, res) => {
  const signupData = req.body;
  const { success } = signupSchema.safeParse(signupData);
  if (!success) {
    return res.status(401).json({ message: "Invalid user data" });
  }
  try {
    const response = await prisma.user.create({
      data: {
        ...signupData,
      },
    });
    console.log(response);
  } catch (error) {
    return res.status(401).json({ message: "Can't push data in Database" });
  }
  res.json({ message: "Signup Successfull" });
});

const addTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  user_id: zod.number(),
});

app.post("/todos/add", async (req, res) => {
  const todoData = req.body;
  const { success } = addTodoSchema.safeParse(todoData);
  if (!success) {
    return res.status(401).json({ message: "Invalid todo data" });
  }
  try {
    const response = await prisma.todo.create({ data: { ...todoData } });
    console.log(response);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Can't push data in Todo data in Database" });
  }

  res.json({ message: "Todo created Successfull" });
});

app.put("/todos/done", async (req, res) => {
  const { id } = req.body;

  try {
    const response = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        done: true,
      },
    });
    console.log(response);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Can't mark todo as done in Database" });
  }
  res.json({ message: "Success mask as done" });
});

const updateTodoSchema = zod.object({
  title: zod.string().optional(),
  description: zod.string().optional(),
  done: zod.boolean().optional(),
  id: zod.number(),
});

app.put("/todos/edit", async (req, res) => {
  const { title, description, done, id } = req.body;

  const { success } = updateTodoSchema.safeParse({
    title,
    description,
    done,
    id,
  });
  if (!success) {
    return res.status(401).json({ message: "Invalid todo data" });
  }

  try {
    const response = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
        done,
      },
    });
    console.log(response);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Can't mark todo as done in Database" });
  }
  res.json({ message: "Successfully update todo" });
});

app.listen(3000, () => {
  console.log("Listing at port 3000");
});
