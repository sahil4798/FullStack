import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const App = () => {
  return (
    <div>
      <h1>helooo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="api/v1/user/signup" Component={Signup} />
          <Route path="api/v1/user/signin" Component={Signin} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
