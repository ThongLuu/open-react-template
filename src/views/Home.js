import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import GenerationImage from "../components/sections/GenerateImage";
import ButtonReadNPCLord from "../components/sections/ButtonReadNPCLord";

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <ButtonReadNPCLord/>
      <GenerationImage />
    </>
  );
};

export default Home;
