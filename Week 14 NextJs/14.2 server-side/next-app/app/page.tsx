import axios from "axios";

async function getUserData() {
  // await new Promise((res) => {
  //   setTimeout(res, 5000);
  // });

  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

export default async function Home() {
  const userDetail = await getUserData();

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center	">
        <div className="p-20 m-10 border border-slate-300">
          <div className="text-center">User Detail</div>
          <div>{userDetail.name}</div>
          <div>{userDetail.email}</div>
        </div>
      </div>
    </div>
  );
}
