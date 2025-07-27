import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

const Index = () => {
  return (
    <>
      <Header />
      <Featured />
      <About />
      <Services />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default Index;
