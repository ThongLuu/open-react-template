import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import GenerationImage from "../components/sections/GenerateImage";
import ButtonReadNPCLord from "../components/sections/ButtonReadNPCLord";
import CarouselImageListSection from "../components/sections/CarouselImageListSection";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <ButtonReadNPCLord />
      {/* <CarouselImageListSection /> */}
      <GenerationImage />
    </>
  );
};

export default Home;
