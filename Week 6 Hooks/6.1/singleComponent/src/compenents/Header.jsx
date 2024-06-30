import React from "react";

// const Header = (props) => {
//   console.log("rerendered");
//   return (
//     <div>
//       <h1> {props.title}</h1>
//     </div>
//   );
// };

const Header = React.memo(function Header(props) {
  //   console.log("rerendered");
  return (
    <div>
      <h1> {props.title}</h1>
    </div>
  );
});

export default Header;
