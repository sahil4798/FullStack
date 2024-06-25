import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { SECRET_KEY } from "./config";
const prisma = new PrismaClient();

async function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(501).json({ message: "No token provided" });
  }
  const arr = authHeader.split(" ");
  const token = arr[1];
  try {
    const decoded: any = jwt.verify(token, SECRET_KEY);
    if (decoded.user_id) {
      try {
        const response = await prisma.user.findFirst({
          where: { id: decoded.user_id },
        });
        if (!response) {
          return res.status(501).json({ message: "user not exist" });
        }
        // console.log(response);
        req.user_id = decoded.user_id;
        next();
      } catch (error) {
        return res.status(501).json({ message: "Can't find user", error });
      }
    }
  } catch (error) {
    return res.status(501).json({ message: "Invalid token", error });
  }
}

export default authMiddleware;
