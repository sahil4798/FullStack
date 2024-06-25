import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://test_owner:oFaBx2YCUs9h@ep-frosty-haze-a54u1wqt.us-east-2.aws.neon.tech/todo-app-assignment?sslmode=require",
});

async function createUserTable() {
  await client.connect();

  try {
    const query = `CREATE TABLE users(
        id  SERIAL PRIMARY KEY,
        firstName VARCHAR(20),
        lastName  VARCHAR(20),
        username VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(20) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`;
    const res = await client.query(query);

    console.log(res);
  } catch (err) {
    console.error("Error while creating table", err);
  } finally {
    await client.end();
  }
}

// createUserTable();

async function addUserInTable(user: userParameter) {
  try {
    await client.connect();
    const query = ` 
    INSERT INTO users(firstName, lastName , username, password)
    VALUES($1 , $2 , $3 , $4)
    RETURNING username, password, firstname
    `;
    const values = [
      user.firstName,
      user.lastName,
      user.username,
      user.password,
    ];
    const res = await client.query(query, values);
    console.log(res.rows[0]);
  } catch (err) {
    console.error("Erroe while pushing entry in user table", err);
  } finally {
    client.end();
  }
}

interface userParameter {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

// addUserInTable({
//   firstName: "olly",
//   lastName: "billi",
//   username: "olly@gmail.com",
//   password: "pyaraoggy",
// });

async function findUserFromUsers(user_id: number) {
  try {
    client.connect();
    const value = user_id;

    const query = `SELECT username, password, firstname FROM users WHERE id=$1`;
    const res = await client.query(query, [value]);
    console.log(res.rows[0]);
  } catch (err) {
    console.log("Error while finding user", err);
  } finally {
    client.end();
  }
}

// findUserFromUsers(1);

async function createTodosTable() {
  try {
    client.connect();
    const query = `
    CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    title VARCHAR(250) NOT NULL,
    description TEXT,
    done  BOOLEAN DEFAULT false
    )
    `;
    const res = await client.query(query);
    console.log(res);
  } catch (err) {
    console.log("Error while creating  todos table", err);
  } finally {
    client.end();
  }
}

// createTodosTable();

async function addTodoInTodosTable(todo: todoPara) {
  try {
    client.connect();
    const values = [todo.title, todo.description, todo.user_id];
    const query = `
    INSERT INTO todos (title , description ,user_id)
    VALUES($1 , $2 , $3)
    RETURNING title, description, done, id
    `;
    const res = await client.query(query, values);
    console.log(res.rows[0]);
  } catch (err) {
    console.log("Error while creating  todos table", err);
  } finally {
    client.end();
  }
}

interface todoPara {
  title: string;
  description: string;
  user_id: number;
}

// addTodoInTodosTable({
//   title: "bathing",
//   description: "bath daily",
//   user_id: 1,
// });

async function findTodo(todo_id: number) {
  try {
    client.connect();
    const values = todo_id;
    const query = `
    SELECT * FROM todos WHERE id=$1
    `;
    const res = await client.query(query, [values]);
    console.log(res.rows[0]);
  } catch (err) {
    console.log("Error while creating  todos table", err);
  } finally {
    client.end();
  }
}

// findTodo(2);

async function updateTodo(todo_id: number) {
  try {
    client.connect();
    const value = todo_id;
    const query = `
    UPDATE todos
    SET done=true
    WHERE id=$1
    RETURNING title, description, done, id
    `;
    const res = await client.query(query, [value]);
    // console.log(res);
    // console.log(res.rows[0]);
    return res.rows[0];
  } catch (err) {
    console.log("Error while creating  todos table", err);
  } finally {
    client.end();
  }
}

// updateTodo(2).then((arr) => {
//   console.log(arr);
// });

async function getTodos(user_id: number) {
  try {
    client.connect();
    const value = user_id;
    const query = `
    SELECT title, description, done, id 
    FROM todos
    WHERE user_id=$1
    `;
    const res = await client.query(query, [value]);
    // console.log(res.rows);
    if (res.rows.length > 0) {
      return res.rows;
    } else {
      return null;
    }
  } catch (err) {
    console.log("Error while creating  todos table", err);
  } finally {
    client.end();
  }
}

//  getTodos(1);

async function func1() {
  const todos = await getTodos(1);
  console.log(todos?.length);
}

func1();
