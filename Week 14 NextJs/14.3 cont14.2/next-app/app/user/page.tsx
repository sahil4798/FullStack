import client from "@/db";

async function getUserData() {
  try {
    const user = await client.user.findFirst();
    if (user) {
      // return user;
      return { username: user.username, id: user.id };
    }
  } catch (err) {
    console.log(err);
  }
}

export default async function Page() {
  const userDetail = await getUserData();

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center	">
        <div className="p-20 m-10 border border-slate-300">
          <div className="text-center">User Detail</div>
          <div>{userDetail.username}</div>
          <div>{userDetail.id}</div>
        </div>
      </div>
    </div>
  );
}
