import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      firstname,
      lastname,
      email,
      username,
      password,
    },
  });

  console.log(res);
}

// insertUser("a", "b", "c", "d", "e");

async function insertTodo(title: string, description: string, user_id: number) {
  const res = await prisma.todo.create({
    data: {
      title,
      description,
      user_id,
    },
  });

  console.log(res);
}

// insertTodo("Workout", "Go to gym at 7:00pm", 100);

async function findTodoAndItsUser(user_id: number) {
  const res = await prisma.todo.findMany({
    where: { user_id: user_id },
    select: {
      id: true,
      title: true,
      description: true,
      user: true,
    },
  });

  console.log(res);
}

findTodoAndItsUser(1);
