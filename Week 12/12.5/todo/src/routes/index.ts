import { Router } from "express";

const router = Router();

import userRouter from "./user";
import todoRouter from "./todo";

router.use("/user", userRouter);

router.use("/todos", todoRouter);

export default router;
