import React from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import MainCard from "../components/MainCard";

const HomePage = () => {
  return (
    <>
      <Home />
      <div
        id="tool"
        className="bg-sky-50 min-h-screen p-5 flex justify-center items-center"
      >
        <MainCard />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
