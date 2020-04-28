import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <section className="main-page flex-container loading-page">
      <h1>Loading...</h1>
      <img
        src="/images/loading-astronaut.gif"
        alt="loading gif"
      />
    </section>
  );
};

export default LoadingPage;
