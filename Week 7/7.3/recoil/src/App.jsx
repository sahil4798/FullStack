import { useMemo } from "react";
import { networkAtom, jobAtom, messageAtom, notificationAtom } from "./atom";
import { totalCountSelector } from "./atom";
import { RecoilRoot, useRecoilValue } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
};

function MainApp() {
  const newtworkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const messageNotificationCount = useRecoilValue(messageAtom);
  const notificationNotificationCount = useRecoilValue(notificationAtom);

  const totoalNotificationCount = useMemo(() => {
    return (
      newtworkNotificationCount +
      jobNotificationCount +
      messageNotificationCount +
      notificationNotificationCount
    );
  }, [
    newtworkNotificationCount,
    jobNotificationCount,
    messageNotificationCount,
    notificationNotificationCount,
  ]);

  const v = useRecoilValue(totalCountSelector);

  return (
    <div>
      <button>Home </button>
      <button>
        My Network(
        {newtworkNotificationCount > 99
          ? "99+"
          : newtworkNotificationCount}){" "}
      </button>
      <button>
        Jobs( {jobNotificationCount > 99 ? "99+" : jobNotificationCount})
      </button>
      <button>
        Messaging({" "}
        {messageNotificationCount > 99 ? "99+" : messageNotificationCount})
      </button>
      <button>
        Notification({" "}
        {notificationNotificationCount > 99
          ? "99+"
          : notificationNotificationCount}
        )
      </button>

      <button>
        me({v})({totoalNotificationCount})
      </button>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState({
//     myNetworkCount: 0,
//     jobsCount: 0,
//     MessageCount: 0,
//     notificationCount: 0,
//   });
//   return (
//     <div>
//       <button>Home </button>

//       <button
//         onClick={() =>
//           setCount((prev) => {
//             console.log(prev);
//             prev.myNetworkCount = prev.myNetworkCount + 1;
//             console.log(prev);
//             return prev;
//           })
//         }
//       >
//         My Network({count.myNetworkCount})
//       </button>
//       <button onClick={() => setCount((prev) => prev.myNetworkCount + 1)}>
//         Jobs({count.jobsCount})
//       </button>
//       <button onClick={() => setCount((prev) => prev.myNetworkCount + 1)}>
//         Messaging({count.MessageCount})
//       </button>
//       <button onClick={() => setCount((prev) => prev.myNetworkCount + 1)}>
//         Notification({count.notificationCount})
//       </button>
//     </div>
//   );
// };

// export default App;
