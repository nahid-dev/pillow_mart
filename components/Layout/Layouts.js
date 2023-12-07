import React from "react";
import Navbar from "../Navbar/Navbar";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}
    </div>
  );
};

export default Layouts;
