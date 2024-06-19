import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async   fucntion insertUser ( ){

//     const res = await prisma.user.create({firstName , lastName  , email:username, password})
// }

async function insertUser(
  firstName: string,
  lastName: string,
  username: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email: username,
      password,
    },
  });

  console.log(res);
}

// insertUser("jack", "sher", "jack@gamil.com", "duniyakapapa");

async function updateUser({ firstName, lastName }: userParamrs, id: number) {
  const res = await prisma.user.update({
    where: { id: id },
    data: { firstName, lastName },
  });

  console.log(res);
}

interface userParamrs {
  firstName: string;
  lastName: string;
}

// updateUser({ firstName: "jackey", lastName: "billa" }, 1);

async function getUser(username: string) {
  const res = await prisma.user.findFirst({ where: { email: username } });
  console.log(res);
}

getUser("jack@gamil.com");
