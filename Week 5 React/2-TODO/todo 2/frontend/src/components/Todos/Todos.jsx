import { useEffect } from "react";
import { useState } from "react";

import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (data) => {
        const jsonData = await data.json();
        setTodos(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todos]);

  async function func(data) {
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
      return state;
    });
  }

  return (
    <>
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
}

export default Todos;
