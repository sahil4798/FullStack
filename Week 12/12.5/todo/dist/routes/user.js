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
const client_1 = require("@prisma/client");
const zod_1 = __importDefault(require("zod"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const middleware_1 = __importDefault(require("../middleware"));
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const signupSchema = zod_1.default.object({
    username: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
});
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var token;
    const signupData = req.body;
    const { success } = signupSchema.safeParse(signupData);
    if (!success) {
        return res.status(401).json({ message: "Invalid user data" });
    }
    try {
        const isExist = yield prisma.user.findFirst({
            where: {
                OR: [{ email: signupData.email }, { username: signupData.username }],
            },
        });
        if (isExist) {
            const conflictedData = isExist.email === signupData.email ? "email" : "username";
            return res
                .status(401)
                .json({ message: `User already exist with ${conflictedData}` });
        }
        const response = yield prisma.user.create({
            data: Object.assign({}, signupData),
        });
        console.log(response.id);
        const user_id = response.id;
        token = jsonwebtoken_1.default.sign({ user_id }, config_1.SECRET_KEY);
    }
    catch (error) {
        return res.status(401).json({ message: "Can't push data in Database" });
    }
    res.json({ message: "Signup Successfull", token: token });
}));
const signinSchema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string(),
});
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var token;
    const userData = req.body;
    const { success } = signinSchema.safeParse(userData);
    if (!success) {
        return res.status(501).json({ message: "Invalid input data" });
    }
    try {
        const response = yield prisma.user.findFirst({
            where: { username: userData.username, password: userData.password },
        });
        if (!response) {
            return res
                .status(501)
                .json({ message: "Incorrect username or password" });
        }
        console.log(response);
        const user_id = response.id;
        token = jsonwebtoken_1.default.sign({ user_id }, config_1.SECRET_KEY);
    }
    catch (error) {
        return res.status(501).json({ message: "Invalid input data", error });
    }
    res.json({ message: "Successfully Sign-in", token });
}));
const updateUserSchema = zod_1.default.object({
    username: zod_1.default.string().optional(),
    email: zod_1.default.string().optional(),
    password: zod_1.default.string().optional(),
});
router.put("/update", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.user_id;
    const updataData = req.body;
    const { success } = updateUserSchema.safeParse(updataData);
    if (!success) {
        return res.status(501).json({ message: "Invalid data" });
    }
    try {
        const response = yield prisma.user.update({
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
    }
    catch (error) {
        return res
            .status(501)
            .json({ message: "Error while updating users", error });
    }
    res.json({ message: "Successfully updated user" });
}));
router.get("/", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users;
    try {
        const response = yield prisma.user.findMany();
        // console.log(response);
        users = response;
    }
    catch (error) {
        return res
            .status(401)
            .json({ message: "Something went wrong when finding users" });
    }
    res.json({ message: "Successfully find users ", users });
}));
exports.default = router;
