import { Hono } from "hono";
import userRoute from "./user";
import blogRoute from "./blog";

const mainRoute = new Hono();

mainRoute.route("/user", userRoute);
// mainRoute.route("/Blog", blogRoute);

export default mainRoute;
