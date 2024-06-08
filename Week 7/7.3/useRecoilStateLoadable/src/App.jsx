import { useEffect } from "react";
import { todoAtomFamily } from "./atom";
import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";

const App = () => {
  // console.log("Checkpoint-1 in App");
  return (
    <div>
      <RecoilRoot>
        <div>
          <Todo id={1} />
          <Todo id={2} />
        </div>
      </RecoilRoot>
    </div>
  );
};

function Todo(props) {
  const todo = useRecoilValueLoadable(todoAtomFamily(props.id));
  // console.log(todo.state);
  // console.log(todo.contents);
  if (todo.state === "loading") {
    return <div>loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        <h4>{todo.contents.title}</h4>
        <h4>{todo.contents.description}</h4>
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>Error while getting data from backend</div>;
  }
}

export default App;
