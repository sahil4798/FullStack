import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import zod from "zod";

import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";
import authMiddleware from "../middleware";

const router = Router();
const prisma = new PrismaClient();

const signupSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  var token;
  const signupData = req.body;
  const { success } = signupSchema.safeParse(signupData);
  if (!success) {
    return res.status(401).json({ message: "Invalid user data" });
  }
  try {
    const isExist = await prisma.user.findFirst({
      where: {
        OR: [{ email: signupData.email }, { username: signupData.username }],
      },
    });
    if (isExist) {
      const conflictedData =
        isExist.email === signupData.email ? "email" : "username";
      return res
        .status(401)
        .json({ message: `User already exist with ${conflictedData}` });
    }
    const response = await prisma.user.create({
      data: {
        ...signupData,
      },
    });
    console.log(response.id);
    const user_id = response.id;
    token = jwt.sign({ user_id }, SECRET_KEY);
  } catch (error) {
    return res.status(401).json({ message: "Can't push data in Database" });
  }

  res.json({ message: "Signup Successfull", token: token });
});

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  var token;
  const userData = req.body;
  const { success } = signinSchema.safeParse(userData);

  if (!success) {
    return res.status(501).json({ message: "Invalid input data" });
  }
  try {
    const response = await prisma.user.findFirst({
      where: { username: userData.username, password: userData.password },
    });
    if (!response) {
      return res
        .status(501)
        .json({ message: "Incorrect username or password" });
    }
    console.log(response);
    const user_id = response.id;
    token = jwt.sign({ user_id }, SECRET_KEY);
  } catch (error) {
    return res.status(501).json({ message: "Invalid input data", error });
  }

  res.json({ message: "Successfully Sign-in", token });
});

const updateUserSchema = zod.object({
  username: zod.string().optional(),
  email: zod.string().optional(),
  password: zod.string().optional(),
});

router.put("/update", authMiddleware, async (req: any, res: any) => {
  const user_id = req.user_id;
  const updataData = req.body;

  const { success } = updateUserSchema.safeParse(updataData);
  if (!success) {
    return res.status(501).json({ message: "Invalid data" });
  }
  try {
    const response = await prisma.user.update({
      where: { id: user_id },
      data: {
        username: updataData.username,
        email: updataData.email,
        password: updataData.password,
      },
    });
    if (!response) {
      return res.status(501).json({ message: "user not exist" });
    }
    console.log(response);
  } catch (error) {
    return res
      .status(501)
      .json({ message: "Error while updating users", error });
  }

  res.json({ message: "Successfully updated user" });
});

router.get("/", authMiddleware, async (req: Request, res: any) => {
  let users;
  try {
    const response = await prisma.user.findMany();
    // console.log(response);
    users = response;
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Something went wrong when finding users" });
  }

  res.json({ message: "Successfully find users ", users });
});

export default router;
