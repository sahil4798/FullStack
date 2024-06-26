import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

type BodyType = z.infer<typeof userProfileSchema>;

const stringSchema = z.string();
type typ1 = z.infer<typeof stringSchema>;

app.put("/user", (req, res) => {
  const { success, data } = userProfileSchema.safeParse(req.body);
  const updateBody: BodyType = req.body; // how to assign a type to updateBody?

  if (success) {
    res.status(411).json({});
    return;
  }
  //update database here
  res.json({
    message: "User updated",
  });
});
