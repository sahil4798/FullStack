// import { useState, useEffect } from "react";

// const useTodos = () => {
//   console.log("Checkpoint-2");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     console.log("Checkpoint-3");
//     fetch("https://sum-server.100xdevs.com/todos")
//       .then(async (data) => {
//         const jsonData = await data.json();
//         console.log(jsonData);
//         setTodos(jsonData.todos);
//         console.log("Checkpoint-4");
//       })
//       .catch((err) => console.log(err));
//     console.log("Async Check");
//   }, []);

//   return todos;
// };

// const App = () => {
//   console.log("Checkpoint-1");
//   const todos = useTodos();

//   console.log("Checkpoint-5");
//   return (
//     <div>
//       <Todos todos={todos} />
//     </div>
//   );
// };

// function Todos(props) {
//   return (
//     <>
//       {props.todos.map((todo) => {
//         return (
//           <div key={todo.id}>
//             <h1>{todo.title}</h1>
//             <h5>{todo.description}</h5>
//           </div>
//         );
//       })}
//     </>
//   );
// }
// export default App;

//even setA run but its not Re-render , React will not Re-render App Component as a is iniallised as 1 and setA is setting it 1 too so no re-Render C-1 C-4 C-2 C-3

import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  console.log("Checkpoint-1");
  const [a, setA] = useState(1);
  useEffect(() => {
    console.log("Checkpoint-2");
    setA(1);
    // setA(2);
    console.log("Checkpoint-3");
  }, []);
  console.log("Checkpoint-4");
  return (
    <div>
      {a}
      <button
        onClick={() => {
          setA(parseInt(a) + 1);
        }}
      >
        {" "}
        Click{" "}
      </button>
    </div>
  );
};

export default App;
