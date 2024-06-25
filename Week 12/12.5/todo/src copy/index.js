"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
app.get("/", (req, res) => {
    res.send("you landed on home page");
});
const signupSchema = zod_1.default.object({
    username: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signupData = req.body;
    const { success } = signupSchema.safeParse(signupData);
    if (!success) {
        return res.status(401).json({ message: "Invalid user data" });
    }
    try {
        const response = yield prisma.user.create({
            data: Object.assign({}, signupData),
        });
        console.log(response);
    }
    catch (error) {
        return res.status(401).json({ message: "Can't push data in Database" });
    }
    res.json({ message: "Signup Successfull" });
}));
const addTodoSchema = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string(),
    user_id: zod_1.default.number(),
});
app.post("/todos/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoData = req.body;
    const { success } = addTodoSchema.safeParse(todoData);
    if (!success) {
        return res.status(401).json({ message: "Invalid todo data" });
    }
    try {
        const response = yield prisma.todo.create({ data: Object.assign({}, todoData) });
        console.log(response);
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Can't push data in Todo data in Database" });
    }
    res.json({ message: "Todo created Successfull" });
}));
app.put("/todos/done", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const response = yield prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                done: true,
            },
        });
        console.log(response);
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Can't mark todo as done in Database" });
    }
    res.json({ message: "Success mask as done" });
}));
const updateTodoSchema = zod_1.default.object({
    title: zod_1.default.string().optional(),
    description: zod_1.default.string().optional(),
    done: zod_1.default.boolean().optional(),
    id: zod_1.default.number(),
});
app.put("/todos/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield prisma.todo.update({
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
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Can't mark todo as done in Database" });
    }
    res.json({ message: "Successfully update todo" });
}));
app.listen(3000, () => {
    console.log("Listing at port 3000");
});
