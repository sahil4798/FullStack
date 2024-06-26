import { useEffect, useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  console.log("Checkpoint-1");
  const [input, setInput] = useState(0);

  // Your solution starts here
  //   const [factorial, setFactorial] = useState(1);

  //   function factorialFunc(n) {
  //     console.log("Checkpoint-5");
  //     if (n < 0) {
  //       return -1;
  //     }
  //     if (n === 0 || n === 1) {
  //       return 1;
  //     }

  //     return n * factorialFunc(n - 1);
  //   }

  //   useEffect(() => {
  //     console.log("Checkpoint-2");
  //     setFactorial(factorialFunc(input));
  //     console.log("Checkpoint-4");
  //   }, [input]);

  const expensiveValue = useMemo(() => {
    if (input < 0) {
      return -1;
    }
    let result = 1;
    for (let i = 1; i <= input; i++) {
      result *= i;
    }

    return result;
  }, [input]);

  // Your solution ends here

  console.log("Checkpoint-3");
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
