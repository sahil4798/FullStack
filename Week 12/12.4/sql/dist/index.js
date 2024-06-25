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
const pg_1 = __importDefault(require("pg"));
const client = new pg_1.default.Client({
    connectionString: "postgresql://sahil:mysecretpassword@localhost:5432/sahil",
});
// client.connect().then(() => {
//     console.log("connected to sql postgres");
//   });
// async function createTable() {
//   await client.connect();
//   const res = await client.query(
//     `
//         CREATE TABLE users2 (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );
//         `
//   );
//   console.log(res);
// }
// createTable();
function insertInTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `INSERT INTO users2 (username , email , password) VALUES($1 , $2 ,$3) RETURNING *`;
        const values = [username, email, password];
        const res = yield client.query(query, values);
        console.log(res);
        console.log(res.rows[0]);
    });
}
// insertInTable("abcd", "abcd@gmail.com", "abcdkapapa");
function findFromTabel(username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `SELECT * FROM users2 WHERE username=$1 `;
        const res = yield client.query(query, [username]);
        console.log(res);
        console.log(res.rows[0]);
    });
}
// findFromTabel("oggy");
function createAdressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `
CREATE TABLE adresses2(
 id SERIAL PRIMARY KEY,
 user_id INTEGER NOT NULL,
 city VARCHAR(200) NOT NULL,
 country VARCHAR(200) NOT NULL,
 street VARCHAR(200) NOT NULL,
 pincode VARCHAR(20),
 created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
 )
  `;
        //DELETE RESTRICT
        const res = yield client.query(query);
        console.log(res);
    });
}
// createAdressTable();
function insertAdress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const variables = [user_id, city, country, street, pincode];
        const query = `
INSERT INTO adresses2 (user_id , city , country , street , pincode)
VALUES($1 , $2 , $3 , $4 , $5)
`;
        const res = yield client.query(query, variables);
        console.log(res);
    });
}
function signup(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            yield client.query("BEGIN");
            const variables1 = [user.usename, user.email, user.password];
            const query1 = `
  INSERT INTO users2 (username , email , password) VALUES($1 , $2 ,$3) RETURNING id;
  `;
            const res = yield client.query(query1, variables1);
            const user_id = res.rows[0].id;
            const variables2 = [
                user_id,
                user.city,
                user.country,
                user.street,
                user.pincode,
            ];
            const query2 = `
    INSERT INTO adresses2 (user_id , city , country , street , pincode)
    VALUES($1 , $2 , $3 , $4 , $5)
    `;
            const res2 = yield client.query(query2, variables2);
            yield client.query("COMMIT");
            console.log("Transaction completed successfully");
        }
        catch (err) {
            yield client.query("ROLLBACK");
            console.log("Transaction failed ", err);
        }
        finally {
            client.end();
        }
    });
}
// signup({
//   usename: "olly",
//   email: "olly@gmail.com",
//   password: "pyaraoggy",
//   city: "newCity",
//   country: "newCountry",
//   street: "newStreet",
//   pincode: "newPincode",
// });
// join - innner , left , right , full
function innnerJoin(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `
  SELECT u.username , u.password , a.city , a.country FROM users2 as u FULL JOIN adresses2 as a ON u.id=a.user_id  
`;
        const res = yield client.query(query);
        console.log(res.rows);
    });
}
innnerJoin(4);
