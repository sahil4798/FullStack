import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@aahil07/medium-common";

import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "Sign Up" | "Sign In" }) => {
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function submitHandler() {
    const userData = {
      name: postInput.name,
      email: postInput.email,
      password: postInput.password,
    };

    try {
      const res = await axios.post(
        `${BACKEND_URL}api/v1/user/${type === "Sign Up" ? "signup" : "signin"}`,
        {
          ...userData,
        }
      );
      const jwt = res.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("failed To signup");
    }
  }

  return (
    <div className=" flex justify-center h-screen ">
      <div className=" flex flex-col justify-center    ">
        <div className="px-10">
          <div className="text-3xl font-extrabold"> Create an account </div>
          <div className="text-slate-300 text-center ">
            {type === "Sign Up"
              ? "Already have an account "
              : "Don't have an acount "}
            <Link
              className="underline"
              to={type === "Sign Up" ? "/signin" : "/signup"}
            >
              {type === "Sign Up" ? "Sign In" : "Sign Up"}
            </Link>
          </div>
        </div>
        <div>
          <LabelledInput
            display={type === "Sign Up" ? "" : "hidden"}
            label={"Name"}
            placeholder={"Enter your name"}
            onChange={(e) => {
              setPostInput({ ...postInput, name: e.target.value });
            }}
          />
          <LabelledInput
            label={"Email"}
            placeholder={"Enter your email"}
            onChange={(e) => {
              setPostInput({ ...postInput, email: e.target.value });
            }}
          />
          <LabelledInput
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={(e) => {
              setPostInput({ ...postInput, password: e.target.value });
            }}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            onClick={submitHandler}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
          >
            {type}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface labelledInputType {
  display?: "hidden" | "";
  label: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  display,
  label,
  type,
  placeholder,
  onChange,
}: labelledInputType) {
  return (
    <div className={`mt-2 ${display}`}>
      <label className="block mb-2 text-sm  text-gray-900 dark:text-white font-semi bold">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        type={type || "text"}
        onChange={onChange}
      />
    </div>
  );
}
