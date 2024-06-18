//*****************************useTodos Custom hook***************************** */
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, isLoading] = useTodos(5);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

const Todo = ({ title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const value = setInterval(() => {
      axios
        .get("https://sum-server.100xdevs.com/todos")
        .then((res) => {
          setTodos(res.data.todos);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, n * 1000);
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return [todos, isLoading];
};

// //***********************************useIsOnline Custom Hook***********************************
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const isOnline = useIsOnline();
//   return (
//     <div>
//       <h1>you are hey {isOnline ? "online" : "offline"}</h1>
//     </div>
//   );
// };

// export default App;

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     // console.log(navigator.onLine);
//     // if (navigator.onLine) {
//     //   setStatuss("online");
//     // }
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     });
//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     });
//   }, []);

//   return isOnline;
// }
