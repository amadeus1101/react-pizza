import React from "react";

const PizzaSkeleton: React.FC = () => {
  return (
    <div className="pizza-block skeleton">
      <div className="round"></div>
      <div className="polygon"></div>
      <div className="polygon"></div>
    </div>
  );
};

export default PizzaSkeleton;
