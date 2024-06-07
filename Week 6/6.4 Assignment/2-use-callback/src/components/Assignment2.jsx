// import { useState, useCallback, memo } from "react";

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

// export function Assignment2() {
//     const [inputText, setInputText] = useState('');

//     // Your code starts here
//     function showAlert() {

//     }
//     // Your code ends here

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//                 placeholder="Enter some text"
//             />
//             <Alert showAlert={showAlert} />
//         </div>
//     );
// };

// function Alert({showAlert}) {
//     return <button onClick={showAlert}>Show Alert</button>
// }

import { useState, useCallback, memo } from "react";
const Assignment2 = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const buttonClickHandler = useCallback(() => {
    alert(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <div>
      <input
        placeholder="enter the text"
        value={inputValue}
        onChange={inputChangeHandler}
      ></input>
      <button onClick={buttonClickHandler}>alert</button>
      <DummyComponent inputChangeHandler={inputChangeHandler} />
    </div>
  );
};

const DummyComponent = memo(function DummyComponent() {
  console.log("inside dummy:)");
  return <h1>Dummy hu BKL:)</h1>;
});

export { Assignment2 };
