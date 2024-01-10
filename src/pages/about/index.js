import React from "react";
import BreadCrumbPart from "../../../components/breadcrumb_part/BreadCrumbPart";
import AboutUs from "../../../components/about_us/AboutUs";

const About = () => {
  return (
    <>
      <BreadCrumbPart title={"About"}></BreadCrumbPart>
      <AboutUs></AboutUs>
    </>
  );
};

export default About;
