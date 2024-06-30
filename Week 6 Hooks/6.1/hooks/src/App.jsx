import React from "react";
const App = () => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    console.log("entered in useeffect");

    setInterval(() => {
      console.log("Inside timeout");
      fetch("https://sum-server.100xdevs.com/todos")
        .then((data) => {
          data.json().then((jsonData) => {
            //   console.log(jsonData);
            setTodos(jsonData.todos);
            //   console.log(todos);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);
  }, []);

  //   console.log("hii");
  //   console.log(todos);
  return (
    <div>
      {todos.map((todos) => {
        return (
          <div key={todos.id}>
            <p>{todos.title}</p>
          </div>
        );
      })}
    </div>
  );
};
export default App;
