import React from "react";
import ProgressBar from "./ProgressBar";
import backgroundImage from './../../assets/images/BG.png';

const LoadingPage = (show, image) => {
  return (
    <div
      style={{
        display: show !== 0 ? "block" : "none",
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100vw",
        height: "100vh",
        zIndex: 1000000,
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:"white",
        // opacity: "0.5",
      }}
    >
      <ProgressBar
      />
    </div>
  );
};

export default LoadingPage;
