import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
};

function Count(props) {
  return (
    <>
      <h3>{props.count}</h3>
      <Button setCount={props.setCount} />
    </>
  );
}

function Button(props) {
  function BIH() {
    props.setCount((prevCount) => prevCount + 1);
    // props.setCount(count+1);
  }
  function BDH() {
    props.setCount((prevCount) => prevCount - 1);
    // props.setCount(count+1);
  }
  return (
    <>
      <button onClick={BIH}>smash me to increase</button>;
      <button onClick={BDH}>smash me to descrease</button>
    </>
  );
}

export default App;
