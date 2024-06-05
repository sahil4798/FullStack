import { useEffect } from "react";
import { useState } from "react";

import CreateTodo from "./components/CreateTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  // console.log(todos);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (data) => {
        const jsonData = await data.json();
        setTodos(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function func(data) {
    // console.log("in func");
    // console.log(data);
    const res = await fetch(`http://localhost:3000/todo/${data}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => {
      let state = prevState;
      state.map((todo) => {
        if (todo._id == data) {
          todo.completed = true;
        }
      });
      console.log(state);
      return state;
    });
  }

  return (
    <>
      <CreateTodo />
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            key={todo._id}
            id={todo._id}
            completed={todo.completed}
            f1={func}
          />
        );
      })}
    </>
  );
};

function Todo(props) {
  function handlerFunction(data) {
    // console.log(data);
    props.f1(data);
  }
  return (
    <>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <CustumButton
        completed={props.completed}
        id={props.id}
        f2={handlerFunction}
      />
    </>
  );
}

function CustumButton(props) {
  let innerHtml = "mark as done";
  if (props.completed) innerHtml = "done";

  function clickHandler(e) {
    // console.log(e.target.id);
    // if (innerHtml === "mark as done") {
    props.f2(e.target.id);
    // }
  }
  return (
    <button id={props.id} onClick={clickHandler}>
      {innerHtml}
    </button>
  );
}
export default App;
