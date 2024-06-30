// import { useEffect } from "react";

// // Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

// export function Assignment1() {

//     useEffect(() => {

//     }, []);

//     const handleButtonClick = () => {

//     };

//     return (
//         <div>
//             <input type="text" placeholder="Enter text here" />
//             <button onClick={handleButtonClick}>Focus Input</button>
//         </div>
//     );
// };

import { useState, useEffect, useRef } from "react";

const Assignment1 = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  const buttonClickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="enter text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button onClick={buttonClickHandler}>Click me</button>
    </div>
  );
};

export { Assignment1 };
