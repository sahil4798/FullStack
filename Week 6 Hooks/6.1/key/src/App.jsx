import React from "react";
import Todos from "./components/Todos";

const TODOS = [
  {
    title: "workout",
    description: "go to gym",
    id: 1,
  },
  {
    title: "DSA",
    description: "DO one quesion of DSA daily",
    id: 2,
  },
  {
    title: "Bath",
    description: "take a bath daily",
    id: 3,
  },
];
let global_Id = 4;

const App = () => {
  const [todos, setTodos] = React.useState(TODOS);

  function onAddTodo() {
    console.log("C 1 " + global_Id);
    setTodos([
      ...todos,
      { title: "NewTitle", description: "NewDescription", id: global_Id },
    ]);
    // console.log("C 2");
    global_Id = global_Id + 1;
    console.log("C 2 " + global_Id);
  }

  return (
    <>
      <button onClick={onAddTodo}>Add new TODO</button>
      <Todos todos={todos} />
    </>
  );
};

export default App;
