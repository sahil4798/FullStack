"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <div>Signin Page</div>
      <div>
        <input placeholder="username" />
        <input placeholder="password" />
        <button
          onClick={async () => {
            const res = await signIn("credentials", {
              username: "",
              password: "",
              redirect: false,
            });
            console.log(res);
            router.push("/");
          }}
        >
          signin
        </button>

        <div>
          <div>
            <button
              onClick={async () => {
                await signIn("github");
                router.push("/");
              }}
            >
              signin with github
            </button>
          </div>
          <div>
            <button
              onClick={async () => {
                await signIn("github");
              }}
            >
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
