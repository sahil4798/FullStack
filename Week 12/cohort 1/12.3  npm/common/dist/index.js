"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.signinInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.createTodoInput = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
