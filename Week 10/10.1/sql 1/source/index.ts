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

//*****************Find Query***************** */

async function findUser(email: string) {
  await client.connect();

  const query = ` SELECT * FROM USERS WHERE email = $1`;
  const result = await client.query(query, [email]);

  if (result.rows.length > 0) {
    console.log(result.rows[0]);
    return result.rows[0]; //return the user data
  } else {
    console.log("No user found with the given email");
    return null; //Return null if no user was Found
  }
}
findUser("olly@gmail.com");
