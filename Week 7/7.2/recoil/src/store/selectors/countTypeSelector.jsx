import { countAtom } from "../atoms/count";
import { selector } from "recoil";

export const countSelector = selector({
  key: "countSquared",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0 ? true : false;
  },
});
