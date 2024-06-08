import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";

const Landing = lazy(() => {
  return import("./components/Landing");
});

const Dashboard = lazy(() => {
  return import("./components/Dashboard");
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"Loading.."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading.."}>
                <Landing />
              </Suspense>
            }
          />
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
          navigate("/");
        }}
      >
        landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        dashboard
      </button>
    </div>
  );
}

export default App;
