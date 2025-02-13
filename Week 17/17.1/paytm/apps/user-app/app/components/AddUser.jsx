"use client";
import axios from "axios";

const AddUser = () => {
  async function signUpHandler() {
    const res = axios.post("http://localhost:3000/api/user/signup", {
      email: "billa@gmail.com",
    });
    console.log((await res).data);
  }

  return (
    <div>
      <div className="text-3xl">hii</div>
      <input type="text" placeholder="email" />
      <button onClick={signUpHandler}>signup</button>
    </div>
  );
};

export default AddUser;

// import { PrismaClient } from "@repo/db/client";
// const client = new PrismaClient();
// const user = await client.user.create({
//   data: {
//     email: "jack@gmail.com",
//     name: "jacksher",
//   },
// });
// console.log(user);
