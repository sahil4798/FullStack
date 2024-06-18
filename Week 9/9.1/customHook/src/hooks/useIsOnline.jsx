import { useState, useEffect } from "react";

export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // console.log(navigator.onLine);
    // if (navigator.onLine) {
    //   setStatuss("online");
    // }
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    //for clean-up of event, so they don't lingring up after unmount of useOnline customhook
    return () => {
      window.removeEventListener("online", () => {
        setIsOnline(true);
      });
      window.removeEventListener("offline", () => {
        setIsOnline(false);
      });
    };
  }, []);

  return isOnline;
}
