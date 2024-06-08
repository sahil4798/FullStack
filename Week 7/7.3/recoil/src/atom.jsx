import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const totalCountSelector = selector({
  key: "totalCountSelctor",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const messageAtomCount = get(messageAtom);
    const notificationAtomCount = get(notificationAtom);
    const t =
      networkAtomCount +
      jobAtomCount +
      messageAtomCount +
      notificationAtomCount;
    return t;
  },
});
