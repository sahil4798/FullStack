import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    //
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}
      >
        landing
      </button>
      <button
        onClick={() => {
          //   window.location.href = "/dashboard";
          navigate("/dashboard");
        }}
      >
        dashboard
      </button>
    </div>
  );
}

export default App;
