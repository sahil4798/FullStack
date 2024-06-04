import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const buttonClickHandler = () => {
    let c = count + 1;
    setCount(c);
  };
  return <button onClick={buttonClickHandler}>counter {count}</button>;
};

export default Button;
