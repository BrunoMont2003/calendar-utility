import React from "react";
import Home from "../components/Home";
import MainCard from "../components/MainCard";

const HomePage = () => {
  return (
    <>
      <Home />
      <div className="bg-sky-50 min-h-screen p-5 flex justify-center items-center">
        <MainCard />
      </div>
    </>
  );
};

export default HomePage;
