import { useState, useRef, useEffect } from "react";

const App = () => {
  const [taxAmount, setTaxAmount] = useState(5000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // console.log(divRef.current);
      divRef.current.innerHTML = 2000;

      // document.getElementById("divtax").innerHTML = 3000;
    }, 4000);
  }, []);

  return (
    <div>
      hi there, your income tax returns are
      <div ref={divRef}>{taxAmount}</div>
    </div>
  );
};

export default App;
