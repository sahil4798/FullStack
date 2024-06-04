import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CustomButton setCount={setCount} count={count}></CustomButton>
    </>
  );
}

//component
function CustomButton(props) {
  function clickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={clickHandler}>Counter {props.count}</button>;
}

export default App;
