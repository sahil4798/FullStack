const TODOS = [
  { title: "Workout", description: "Go to gym from 7 to 9 PM", id: 1 },
  { title: "DSA", description: "Solve DSA one quesion daily", id: 2 },
];

import { atomFamily } from "recoil";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: function (id) {
    const todo = TODOS.find((todo) => {
      console.log("Checkpoint-2 in atom");
      return todo.id === id;
    });
    return todo;
  },
});
