import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { countSelector } from "./store/selectors/countTypeSelector";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

function Count() {
  return (
    <>
      <CountRender />
      <Button />
      <CountType />
    </>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <h3>{count}</h3>;
}

function Button() {
  console.log("Inside CountRender");
  const setCount = useSetRecoilState(countAtom);

  function BIH() {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }
  function BDH() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={BIH}>smash me to increase</button>
      <button onClick={BDH}>smash me to descrease</button>
    </>
  );
}
function CountType() {
  const count = useRecoilValue(countAtom);
  return <h2>{count % 2 === 0 ? "even" : ""}</h2>;
  // const evenCount = useRecoilValue(countSelector);
  // console.log(evenCount);
  // return <h3>{evenCount ? "even" : ""}</h3>;
}

export default App;
