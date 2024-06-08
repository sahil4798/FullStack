const TODOS = [
  { title: "Workout", description: "Go to gym from 7 to 9 PM", id: 1 },
  { title: "DSA", description: "Solve DSA one quesion daily", id: 2 },
];

import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

// export const todoAtomFamily = atomFamily({
//   key: "todoAtomFamily",
//   default: function (id) {
//     const todo = TODOS.find((todo) => {
//       console.log("Checkpoint-2 in atom");
//       return todo.id === id;
//     });
//     return todo;
//   },
// });

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: function (id) {
      return async function ({ get }) {
        await new Promise((r) => {
          setTimeout(r, 5000);
        });
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      };
    },
  }),
});
