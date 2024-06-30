// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todos")
//       .then((response) => {
//         setTodos(response.data.todos);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <Todos todos={todos} />
//     </div>
//   );
// };

// function Todos(props) {
//   console.log(props.todos);
//   return (
//     <>
//       {props.todos.map((todo) => {
//         return (
//           <div key={todo.id}>
//             <p>{todo.title}</p>
//             <p>{todo.description}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }
// export default App;

import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [id, setId] = useState("");
  const [todos, setTodos] = useState([{ id: 10 }, { id: 1 }]);
  const [idf, setIdf] = useState(1);

  function inputChangeHandler(e) {
    // console.log("input changed " + e.target.value);
    setId(e.target.value);
  }
  function clickHandler() {
    setIdf(id);
    setId("");
  }
  console.log("hii - inside main component function");
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todos`)
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idf]);

  function buttonClickHandler(e) {
    // console.log(e.target.id);
    setIdf(e.target.id);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="id"
          onChange={inputChangeHandler}
          value={id}
        ></input>
        <button onClick={clickHandler}>set id</button>
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <button key={todo.id} id={todo.id} onClick={buttonClickHandler}>
              {todo.id}
            </button>
          );
        })}
      </div>
      <Todo idf={idf} />
    </div>
  );
};

function Todo({ idf }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${idf}`)
      .then((res) => {
        // console.log(res.data.todo);
        setTodo(res.data.todo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idf]);
  return (
    <div>
      <h1>{todo.title}</h1>
      <h5>{todo.description}</h5>
    </div>
  );
}

export default App;
