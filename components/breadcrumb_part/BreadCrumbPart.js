import React from "react";

const BreadCrumbPart = ({ title }) => {
  return (
    <div>
      <div className="flex items-center h-[350px] p_bg text-white justify-center">
        <h2 className="text-[50px] font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default BreadCrumbPart;
