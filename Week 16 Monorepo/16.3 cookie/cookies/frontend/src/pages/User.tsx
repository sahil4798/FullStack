import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [id, setId] = useState("");

  //   async function func() {
  //     const a = await new Promise((r) => setTimeout(r, 5000));
  //     return a;
  //   }

  useEffect(() => {
    axios
      .get("http://localhost:3000/user", { withCredentials: true })
      .then((res) => {
        // console.log(res.data);
        setId(res.data.id);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <div>
      <div>User Page</div>
      <div>id is {id}</div>
      <div>
        <button
          onClick={async () => {
            const res = await axios.post(
              "http://localhost:3000/logout",
              {},
              {
                withCredentials: true,
              }
            );
            console.log(res.data);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
