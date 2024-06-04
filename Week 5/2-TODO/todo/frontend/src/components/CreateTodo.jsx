import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    setTitle("");
    setDescription("");
  }
  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function descriptionChangeHandler(e) {
    setDescription(e.target.value);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="title"
          value={title}
          onChange={titleChangeHandler}
        />
        <br></br>
        <br></br>
        <input
          placeholder="description"
          value={description}
          onChange={descriptionChangeHandler}
        />
        <br></br>
        <br></br>
        <button>add todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
