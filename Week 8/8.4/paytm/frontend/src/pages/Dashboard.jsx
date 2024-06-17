import Users from "../components/Users";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        alert(error.response.data.message || error);
        // alert("Failed to fetch user data.");
      });
    axios
      .get("http://localhost:3000/api/v1/user/bulk", {
        params: { filter },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.user);
      })
      .catch((error) => {
        // alert("Failed to fetch user data.");
        alert(error.response.data.message || error);
      });
  }, [navigate, filter]);

  return (
    <div>
      <Appbar username={"hii"} />
      <div className="m-8">
        <Balance value={data.balance} />
        <Users
          users={users}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
        />
      </div>
    </div>
  );
};

export default Dashboard;
