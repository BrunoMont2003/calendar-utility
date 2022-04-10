import React, { useContext } from "react";
import Summary from "../components/Summary";
import { MyContext } from "../context/MyContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const ResultPage = () => {
  const { result, file, time } = useContext(MyContext);
  const push = useNavigate();
  return (
    <div className="p-10 bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <Summary events={result} file={file} time={time} />
      <div className="p-5">
        <Button text="Go Back" onClick={() => push("/")} />
      </div>
    </div>
  );
};

export default ResultPage;
