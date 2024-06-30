import React from "react";

const CreateTodo = () => {
  function inputChnageHandler() {}
  function descriptionChangeHandler() {}
  function submitHandler() {}
  return (
    <div>
      <input
        typeof="text"
        placeholder="title"
        onChange={inputChnageHandler}
      ></input>
      <input
        typeof="text"
        placeholder="description"
        onChange={descriptionChangeHandler}
      ></input>
      <button onClick={submitHandler}>submit</button>
    </div>
  );
};

export default CreateTodo;
