"use client";

import { useSession } from "next-auth/react";

const User = () => {
  const session = useSession();
  //   console.log();
  return (
    <div>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
};

export default User;
