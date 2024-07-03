import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";
import { NEXT_AUTH } from "../lib/auth";

const page = async () => {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <Appbar />
      <div>User Info</div>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
};

export default page;
