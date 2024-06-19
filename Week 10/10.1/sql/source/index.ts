//here am securing my connectionString with .env
import dotenv from "dotenv";
dotenv.config();
const connectionStringFromDotenv = process.env.DATABASE_URL;

//Write a code to create table in  you SQL database
import { Client } from "pg";

const client = new Client({
  connectionString: connectionStringFromDotenv,
});

////*****************Creating table Query***************** */

async function CreateUserTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE IF NOT EXISTS Users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        )
        `);
  console.log(result);
}
// CreateUserTable();

////*****************Insert Query***************** */

// async function addRow() {
//   await client.connect();
//   const result = await client.query(
//     `
//     INSERT  INTO USERS (username , email , password , created_at)
//     VALUES ('jack', 'jack@gmail.com' , 'duniyakapapa', CURRENT_TIMESTAMP );
//     `
//   );

//   console.log(result);
// }
// addRow();

// //*****************SQL Injection during inserting***************** */
// async function addRow(username: string, email: string, password: string) {
//   try {
//     await client.connect();
//     const values = [username, email, password];
//     const query = `INSERT  INTO USERS (username , email , password )
//       VALUES ($1, $2 , $3)`;

//     const result = await client.query(query, values);
//     console.log("Insertion success", result);
//   } catch (err) {
//     console.log("eror during insersion", err);
//   } finally {
//     await client.end(); //close the client connection
//   }
// }
// addRow("olly", "olly@gmail.com", "pyaraoggy");

// //*****************Find Query***************** */

// async function findUser(email: string) {
//   await client.connect();

//   const query = ` SELECT * FROM USERS WHERE email = $1`;
//   const result = await client.query(query, [email]);

//   if (result.rows.length > 0) {
//     console.log(result.rows[0]);
//     return result.rows[0]; //return the user data
//   } else {
//     console.log("No user found with the given email");
//     return null; //Return null if no user was Found
//   }
// }
// findUser("olly@gmail.com");

////*****************Relationship Query***************** */

// async function createAddressTable() {
//   await client.connect();
//   try {
//     const query = `CREATE TABLE address (
//       id SERIAL PRIMARY KEY,
//       user_id  INTEGER NOT NULL,
//       city VARCHAR(100) NOT NULL,
//       country VARCHAR(100) NOT NULL,
//       street VARCHAR(100) NOT NULL,
//       pincode VARCHAR(100) NOT NULL,
//       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//       FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//     ) `;
//     const response = await client.query(query);
//     console.log(response);
//   } catch (err) {
//     console.log("error when creating table", err);
//   }
// }
// createAddressTable();

// async function addingAddressInTable(
//   user_id: number,
//   city: string,
//   country: string,
//   street: string,
//   pincode: string
// ) {
//   await client.connect();
//   try {
//     const values = [user_id, city, country, street, pincode];
//     const query = `INSERT INTO address(user_id , city , country , street , pincode) VALUES( $1 , $2, $3 , $4 , $5) `;
//     const response = await client.query(query, values);
//     console.log(response);
//   } catch (err) {
//     console.log("error when creating table", err);
//   }
// }
// addingAddressInTable(1, "NEW YORK", "USA", "123 BROADWAY", "10001");

////*****************Joins ***************** */

async function findJoiningData(user_id: number) {
  await client.connect();
  try {
    const values = user_id;
    // const query = ` SELECT * FROM users JOIN address ON users.id=address.user_id WHERE users.id = $1`;
    const query = ` SELECT u.id, u.username , a.city  , a.country FROM users u JOIN address a ON u.id=a.user_id WHERE u.id = $1`;
    const response = await client.query(query, [values]);
    console.log(response.rows[0]);
  } catch (err) {
    console.log("error when lokking in table", err);
  }
}
findJoiningData(1);
// u.username, a.city, a.country
