import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="text-center">
        Be part of a better internet. Get 20% off membership for a limited time
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
