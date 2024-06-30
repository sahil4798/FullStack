import { useState } from "react";

function HeaderWithButton() {
  const [title, setTitle] = useState("name is jack");

  function clickHandler() {
    setTitle("name is " + Math.random());
  }
  return (
    <>
      <button onClick={clickHandler}>change title</button>
      <h1>my name is {title}</h1>
    </>
  );
}

export default HeaderWithButton;
