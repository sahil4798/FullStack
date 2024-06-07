// import { useState } from "react";

// // Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

// export function Assignment1() {
//     const [count, setCount] = useState(0);

//     // Your code starts here
//     function handleIncrement() {

//     }

//     function handleDecrement() {

//     }
//     // Your code ends here

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
//         </div>
//     );
// };

// const CounterButtons = ({ onIncrement, onDecrement }) => (
//     <div>
//         <button onClick={onIncrement}>Increment</button>
//         <button onClick={onDecrement}>Decrement</button>
//     </div>
// );

import { useState, useCallback, memo } from "react";

const Assignment1 = () => {
  const [count, setCount] = useState(0);

  const countIncrementHandler = useCallback(() => {
    setCount((prevcount) => {
      return prevcount + 1;
    });
  }, []);

  const countDecrementHandler = useCallback(() => {
    setCount((prevcount) => {
      return prevcount - 1;
    });
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <CounterButton
        countInc={countIncrementHandler}
        countDec={countDecrementHandler}
      />
      <CounterButton2 countInc={countIncrementHandler} />
    </div>
  );
};
// const CounterButton = memo(({ countInc, countDec })  {
//   console.log("Button Component 1");
//   return (
//     <>
//       <button onClick={countInc}>increment</button>
//       <button onClick={countDec}>decrement</button>
//     </>
//   );
// });
const CounterButton = memo(function CounterButton({ countInc, countDec }) {
  console.log("Button Component 1");
  return (
    <>
      <button onClick={countInc}>Increment</button>
      <button onClick={countDec}>Decrement</button>
    </>
  );
});

const CounterButton2 = memo(function CounterButton2({ countInc }) {
  console.log("Button Component 2");
  return (
    <>
      <button onClick={countInc}>INCREMENT-2</button>
    </>
  );
});

export { Assignment1 };
