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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(firstname, lastname, email, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                username,
                password,
            },
        });
        console.log(res);
    });
}
// insertUser("a", "b", "c", "d", "e");
function insertTodo(title, description, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title,
                description,
                user_id,
            },
        });
        console.log(res);
    });
}
// insertTodo("Workout", "Go to gym at 7:00pm", 100);
function findTodoAndItsUser(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: { user_id: user_id },
            select: {
                id: true,
                title: true,
                description: true,
                user: true,
            },
        });
        console.log(res);
    });
}
findTodoAndItsUser(1);
