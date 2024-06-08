import { useContext, useState } from "react";
import { CountContext } from "./context";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

function Count(props) {
  return (
    <>
      <CountRender count={props.count} />
      <Button setCount={props.setCount} />
    </>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return <h3>{count}</h3>;
}

function Button(props) {
  const count = useContext(CountContext);
  function BIH() {
    // props.setCount((prevCount) => prevCount + 1);
    props.setCount(count + 1);
  }
  function BDH() {
    // props.setCount((prevCount) => prevCount - 1);
    props.setCount(count - 1);
  }
  return (
    <>
      <button onClick={BIH}>smash me to increase</button>
      <button onClick={BDH}>smash me to descrease</button>
    </>
  );
}

export default App;
