"use client";

import AddUser from "./components/AddUser";

import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  return (
    <div>
      {/* <div>{tim}</div> */}
      <AddUser />
    </div>
  );
}
