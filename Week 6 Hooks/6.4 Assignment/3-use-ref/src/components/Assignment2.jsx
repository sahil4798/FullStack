// import React, { useState, useCallback } from 'react';

// // Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// export function Assignment2() {
//     const [, forceRender] = useState(0);

//     const handleReRender = () => {
//         // Update state to force re-render
//         forceRender(Math.random());
//     };

//     return (
//         <div>
//             <p>This component has rendered {0} times.</p>
//             <button onClick={handleReRender}>Force Re-render</button>
//         </div>
//     );
// };

import { useRef } from "react";
import { useState } from "react";

const Assignment2 = () => {
  const [count, setCount] = useState(0);
  const renderCounterRef = useRef(0);
  renderCounterRef.current = renderCounterRef.current + 1;

  function clickHandler() {
    setCount((intial) => {
      return intial + 1;
    });
  }

  return (
    <div>
      <p>count of render is {renderCounterRef.current}</p>
      <button onClick={clickHandler}>forseRender {count}</button>
    </div>
  );
};

export { Assignment2 };
