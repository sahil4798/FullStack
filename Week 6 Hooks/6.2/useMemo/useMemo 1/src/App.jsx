import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  console.log("checkpoint-1");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [sum, setSum] = useState();

  function inputChangeHandler(e) {
    console.log("checkpoint-2");
    setValue(e.target.value);
    console.log("checkpoint-5");
    let sum = 0;
    for (let i = 1; i <= e.target.value; i++) {
      sum = sum + i;
    }
    setSum(sum);
    console.log("checkpoint-6");
  }
  console.log("checkpoint-3");

  return (
    <div>
      <input type="number" onChange={inputChangeHandler} value={value}></input>
      <p> sum is {sum}</p>
      <button
        onClick={() => {
          setCount(parseInt(count) + 1);
        }}
      >
        count {count}
      </button>
    </div>
  );
};

export default App;
