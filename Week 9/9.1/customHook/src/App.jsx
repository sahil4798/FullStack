// //isOnline
// const App = () => {
//   const isOnline = useIsOnline();
//   return (
//     <div>
//       <h1>you are hey {isOnline ? "online" : "offline"}</h1>
//     </div>
//   );
// };

// export default App;

// const {x, y} = useMousePointer(); its  will print the current position of curson on screen in x and y axix  //hint window.addEventListner("mousemove" , handleMouseMove)
// const {width , height} = useDimmesnsions();  its  will print the current dimension of tab pr window in which react app is running

//////***************************************custom hook**************************************
// import { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((p) => p + 1);
//   }, 1000);

//   return <div>count is {count}</div>;
// };

// export default App;

// function useInterval(f, t) {
//   useEffect(() => {
//     const value = setInterval(() => f(), t);
//     return () => {
//       clearTimeout(value);
//     };
//   }, [f, t]);
// }

//////***************************************useDebounse**************************************

import { useEffect, useState } from "react";

function useDebounced(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(value);
    }, [timeout]);
    return () => {
      clearInterval(t);
    };
  }, [value, timeout]);

  return debouncedValue;
}

const App = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounced(value, 400);
  return (
    <div>
      <h1>Value is {debouncedValue}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default App;

function useDebounce(value, t) {
  return value;
}
