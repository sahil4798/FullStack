import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [auth, setAuth] = useState({ username: "", password: "" });
  return (
    <div>
      <div>Sign-in page</div>
      <input
        placeholder="Username"
        onChange={(e) => {
          setAuth({ ...auth, username: e.target.value });
        }}
      />
      <input
        placeholder="Password"
        onChange={(e) => {
          setAuth({ ...auth, password: e.target.value });
        }}
      />

      <button
        onClick={async () => {
          console.log(auth);
          const res = await axios.post(
            "http://localhost:3000/signin",
            {
              username: auth.username,
              password: auth.password,
            },
            {
              withCredentials: true,
            }
          );
          console.log(res.data);
        }}
      >
        Signin
      </button>
    </div>
  );
};

export default Signin;
