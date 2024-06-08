import { useEffect } from "react";
import { todoAtomFamily } from "./atom";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

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
  const todo = useRecoilValue(todoAtomFamily(props.id));
  // console.log(todo);
  return (
    <>
      <h4>{todo.title}</h4>
      <h4>{todo.description}</h4>
    </>
  );
}

export default App;
