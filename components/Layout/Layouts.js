import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
