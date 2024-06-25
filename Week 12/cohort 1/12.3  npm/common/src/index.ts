import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string(),
});

export type signupParams = z.infer<typeof signupInput>;

export const signinInput = z.object({
  username: z.string(),
  password: z.string(),
});

export type signinParams = z.infer<typeof signinInput>;

export const createTodoInput = z.object({
  title: z.string(),
  description: z.string(),
});

export type createTodoParams = z.infer<typeof createTodoInput>;
