import "./App.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import User from "./pages/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
