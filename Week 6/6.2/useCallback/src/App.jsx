import { useCallback } from "react";
import { useState, memo } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const a = useCallback(function () {
    console.log("hellooo");
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount(parseInt(count) + 1);
        }}
      >
        count is {count}
      </button>
      <CustumButton a={a} />
    </div>
  );
};

const CustumButton = memo(function CustumButton({ a }) {
  console.log("In i the custum button");
  return <h1>this is custom button </h1>;
});

export default App;
