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
// async   fucntion insertUser ( ){
//     const res = await prisma.user.create({firstName , lastName  , email:username, password})
// }
function insertUser(firstName, lastName, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                firstName,
                lastName,
                email: username,
                password,
            },
        });
        console.log(res);
    });
}
// insertUser("jack", "sher", "jack@gamil.com", "duniyakapapa");
function updateUser(_a, id_1) {
    return __awaiter(this, arguments, void 0, function* ({ firstName, lastName }, id) {
        const res = yield prisma.user.update({
            where: { id: id },
            data: { firstName, lastName },
        });
        console.log(res);
    });
}
// updateUser({ firstName: "jackey", lastName: "billa" }, 1);
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({ where: { email: username } });
        console.log(res);
    });
}
getUser("jack@gamil.com");
