import { useEffect } from "react";
import { todoAtomFamily } from "./atom";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

const App = () => {
  console.log("Checkpoint-1 in App");
  return (
    <div>
      <RecoilRoot>
        <div>
          <Todo id={1} />
          <Todo id={2} />
        </div>
        <UpdaterComponent />
      </RecoilRoot>
    </div>
  );
};

function Todo(props) {
  const todo = useRecoilValue(todoAtomFamily(props.id));
  console.log("Checkpoint-3 in Todo Component");

  return (
    <>
      <h4>{todo.title}</h4>
      <h4>{todo.description}</h4>
    </>
  );
}

function UpdaterComponent() {
  console.log("Checkpoint in UpdateComponent ");
  const updateTodo = useSetRecoilState(todoAtomFamily(2));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: 2,
        title: "Updated Title",
        description: "Updated Descruption",
      });
    }, 5000);
  }, []);
  return <h1>My job is to update todo with id 2 after 5 sec of render</h1>;
}

export default App;
