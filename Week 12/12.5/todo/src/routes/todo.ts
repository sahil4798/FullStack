import { Router } from "express";
import zod from "zod";
import { PrismaClient } from "@prisma/client";
import authMiddleware from "../middleware";

const router = Router();
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("get here");
});

const addTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

router.post("/add", authMiddleware, async (req: any, res: any) => {
  const todoData = req.body;
  const user_id = req.user_id;
  const { success } = addTodoSchema.safeParse(todoData);
  if (!success) {
    return res.status(401).json({ message: "Invalid todo data" });
  }
  try {
    const { title, description } = todoData;
    const response = await prisma.todo.create({
      data: { title, description, user_id },
    });
    console.log(response);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Can't push data in Todo data in Database" });
  }

  res.json({ message: "Todo created Successfull" });
});

router.put("/done", authMiddleware, async (req: any, res: any) => {
  const { id } = req.body;
  const user_id = req.user_id;
  try {
    const response = await prisma.todo.update({
      where: {
        id: id,
        user_id: user_id,
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

router.put("/edit", authMiddleware, async (req: any, res: any) => {
  const { title, description, done, id } = req.body;
  const user_id = req.user_id;
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
        user_id,
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

router.delete("/:id", authMiddleware, async (req: any, res: any) => {
  const { id } = req.params;
  const user_id = req.user_id;
  const idInNumber = parseInt(id);
  try {
    const response = await prisma.todo.delete({
      where: { id: idInNumber, user_id: user_id },
    });
    console.log(response);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Todo not found or unable to delete" });
  }
  res.json({ message: "deleted siccessfully" });
});

export default router;
