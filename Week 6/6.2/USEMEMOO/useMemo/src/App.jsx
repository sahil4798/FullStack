import { useMemo, useState } from "react";
import { useEffect } from "react";

const App = () => {
  console.log("Checkout-1");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  // const [sum, setSum] = useState("");
  // useEffect(() => {
  //   console.log("Checkpoint-3");
  //   let s = 0;
  //   for (let i = 1; i <= value; i++) {
  //     s = s + i;
  //   }
  //   setSum(s);
  //   console.log("Checkpoint-4");
  // }, [value]);

  let sum = useMemo(() => {
    console.log("Checkpoint-3");
    let s = 0;
    for (let i = 1; i <= value; i++) {
      s = s + i;
    }
    console.log("Checkpoint-4");
    return s;
  }, [value]);

  console.log("Checkout-2");

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input>
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
