"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";
import User from "./User";

const Appbar = () => {
  return (
    <div className="flex  justify-between bg-slate-400 h-10">
      <div>Next-Auth-appp</div>
      <div className="flex">
        <User />
        <div className="mr-2">
          <button
            className="bg-black text-neutral-50 p-2  py-1 rounded-2xl"
            onClick={() => {
              signIn();
            }}
          >
            Signin
          </button>
        </div>
        <div>
          <button
            className="bg-black text-neutral-50 p-2  py-1 rounded-2xl"
            onClick={() => {
              signOut();
            }}
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
