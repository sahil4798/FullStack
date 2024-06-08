import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkSelectorAtom",
    get: async () => {
      // await new Promise((r) => {
      //   setTimeout(r, 3000);
      // });

      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
