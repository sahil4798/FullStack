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
const express_1 = require("express");
const zod_1 = __importDefault(require("zod"));
const client_1 = require("@prisma/client");
const middleware_1 = __importDefault(require("../middleware"));
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get("/", (req, res) => {
    res.send("get here");
});
const addTodoSchema = zod_1.default.object({
    title: zod_1.default.string(),
    description: zod_1.default.string(),
});
router.post("/add", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoData = req.body;
    const user_id = req.user_id;
    const { success } = addTodoSchema.safeParse(todoData);
    if (!success) {
        return res.status(401).json({ message: "Invalid todo data" });
    }
    try {
        const { title, description } = todoData;
        const response = yield prisma.todo.create({
            data: { title, description, user_id },
        });
        console.log(response);
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Can't push data in Todo data in Database" });
    }
    res.json({ message: "Todo created Successfull" });
}));
router.put("/done", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const user_id = req.user_id;
    try {
        const response = yield prisma.todo.update({
            where: {
                id: id,
                user_id: user_id,
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
router.put("/edit", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield prisma.todo.update({
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
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Can't mark todo as done in Database" });
    }
    res.json({ message: "Successfully update todo" });
}));
router.delete("/:id", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user_id = req.user_id;
    const idInNumber = parseInt(id);
    try {
        const response = yield prisma.todo.delete({
            where: { id: idInNumber, user_id: user_id },
        });
        console.log(response);
    }
    catch (error) {
        return res
            .status(500)
            .json({ error: "Todo not found or unable to delete" });
    }
    res.json({ message: "deleted siccessfully" });
}));
exports.default = router;
