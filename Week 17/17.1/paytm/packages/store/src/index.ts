// export const tim = "abcd";

import { atom } from "recoil";
import { useRecoilValue, RecoilRoot } from "recoil";

const balanceAtom = atom<number>({
  key: "balance",
  default: 0,
});

export const useBalance = () => {
  const value = useRecoilValue(balanceAtom);
  return value;
};
