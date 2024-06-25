import pg from "pg";

const client = new pg.Client({
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

async function insertInTable(
  username: string,
  email: string,
  password: string
) {
  await client.connect();

  const query = `INSERT INTO users2 (username , email , password) VALUES($1 , $2 ,$3) RETURNING *`;
  const values = [username, email, password];
  const res = await client.query(query, values);
  console.log(res);
  console.log(res.rows[0]);
}

// insertInTable("abcd", "abcd@gmail.com", "abcdkapapa");

async function findFromTabel(username: string) {
  await client.connect();

  const query = `SELECT * FROM users2 WHERE username=$1 `;

  const res = await client.query(query, [username]);
  console.log(res);
  console.log(res.rows[0]);
}

// findFromTabel("oggy");

async function createAdressTable() {
  await client.connect();

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
  const res = await client.query(query);
  console.log(res);
}

// createAdressTable();

async function insertAdress(
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  await client.connect();
  const variables = [user_id, city, country, street, pincode];
  const query = `
INSERT INTO adresses2 (user_id , city , country , street , pincode)
VALUES($1 , $2 , $3 , $4 , $5)
`;

  const res = await client.query(query, variables);
  console.log(res);
}

// insertAdress(2, "dholakpur", "dhoulu-country", "sher-nagar", "928232");

interface signupData {
  usename: string;
  email: string;
  password: string;
  city: string;
  country: string;
  street: string;
  pincode: string;
}
async function signup(user: signupData) {
  await client.connect();

  try {
    await client.query("BEGIN");
    const variables1 = [user.usename, user.email, user.password];
    const query1 = `
  INSERT INTO users2 (username , email , password) VALUES($1 , $2 ,$3) RETURNING id;
  `;
    const res = await client.query(query1, variables1);
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

    const res2 = await client.query(query2, variables2);

    await client.query("COMMIT");
    console.log("Transaction completed successfully");
  } catch (err) {
    await client.query("ROLLBACK");

    console.log("Transaction failed ", err);
  } finally {
    client.end();
  }
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

async function innnerJoin(id: number) {
  await client.connect();

  const query = `
  SELECT u.username , u.password , a.city , a.country FROM users2 as u INNER JOIN adresses2 as a ON u.id=a.user_id  Where u.id=$1
`;

  const res = await client.query(query, [id]);
  console.log(res.rows);
}

innnerJoin(4);
