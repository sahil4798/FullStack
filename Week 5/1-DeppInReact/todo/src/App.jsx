import { useState } from "react";

const TODOS = [
  { title: "Workout", description: "go to gym 7-9", completed: false },
  { title: "DSA", description: "do some DSA 11-12", completed: true },
];

//any time a parent re-render its child re-render as well
const App = () => {
  const [todos, setTodos] = useState(TODOS);
  function addTodoHandler() {
    setTodos([
      ...todos,
      {
        title: "Bath",
        description: "wake up and bath daily ",
        completed: true,
      },
    ]);
  }
  return (
    <>
      <button onClick={addTodoHandler}>Add new Todo</button>
      {todos.map((t) => {
        return (
          <Todo
            title={t.title}
            description={t.description}
            completed={t.completed}
            key={t.title}
          />
        );
      })}
      <DummyButton />
    </>
  );
};

function DummyButton() {
  console.log("inside Dummy button");
  return <button>dummmy button</button>;
}

function Todo(props) {
  console.log("inside Todo");
  const { title, description, completed } = props;
  let buttonText = "Mark as Done";
  if (completed) buttonText = "Done";
  function clickHandler() {
    console.log("hiii");
  }
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={clickHandler}>{buttonText}</button>
    </div>
  );
}

export default App;

//JSON
// 1-JSON.stringify() --> converts the javasctipt Object into JSON String
// 1-JSON.parse() --> converts JSON String into javascript Object
