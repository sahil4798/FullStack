import React, { Component, useEffect, useState } from "react";

const App = () => {
  const [isShow, setIsShow] = useState(true);
  console.log("Checkpoint-4");

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  }, []);

  return <div>{isShow ? <MyComponent /> : ""}</div>;
};

export default App;

//State in functional component
// function MyComponent() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount((c) => c + 1);
//         }}
//       >
//         count is {count}
//       </button>
//     </div>
//   );
// }

//State in class Component
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.incrementCount}>
//           count is {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

//LifeCycle event in functional Component

// const MyComponent = () => {
//   console.log("Checkpoint-1");
//   useEffect(() => {
//     console.log("Checkpoint-2");

//     return () => {
//       console.log("cleanup event");
//     };
//   }, []);
//   console.log("Checkpoint-3");

//   return (
//     <div>
//       <h1>LifeCycle event</h1>
//     </div>
//   );
// };

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render = () => (
    <div>
      <h1>LifeCycle event</h1>
    </div>
  );
}
