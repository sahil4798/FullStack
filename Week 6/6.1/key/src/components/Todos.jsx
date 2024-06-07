import React from "react";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
