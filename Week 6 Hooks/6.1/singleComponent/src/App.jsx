import { useState } from "react";
import Header from "./compenents/Header";
import HeaderWithButton from "./compenents/HeaderWithButtton";

const App = () => {
  const [random, setRandom] = useState("my name is jack duniya ka papa");
  function clickHandler() {
    setRandom("my name is " + Math.random());
  }
  return (
    <div>
      <button onClick={clickHandler} style={{ margin: "20px" }}>
        update titele
      </button>
      <Header title={random} />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      {/* <HeaderWithButton />
      <Header title="second title" />
      <HeaderWithButton /> */}
    </div>
  );
};

export default App;
