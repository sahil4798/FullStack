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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const config_1 = require("./config");
const prisma = new client_1.PrismaClient();
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(501).json({ message: "No token provided" });
        }
        const arr = authHeader.split(" ");
        const token = arr[1];
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.SECRET_KEY);
            if (decoded.user_id) {
                try {
                    const response = yield prisma.user.findFirst({
                        where: { id: decoded.user_id },
                    });
                    if (!response) {
                        return res.status(501).json({ message: "user not exist" });
                    }
                    // console.log(response);
                    req.user_id = decoded.user_id;
                    next();
                }
                catch (error) {
                    return res.status(501).json({ message: "Can't find user", error });
                }
            }
        }
        catch (error) {
            return res.status(501).json({ message: "Invalid token", error });
        }
    });
}
exports.default = authMiddleware;
