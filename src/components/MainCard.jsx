import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import UploadFile from "./UploadFile";
import { MyContext } from "../context/MyContext";
import { getTotalTime } from "../logic";

function MainCard() {
  const { result, setResult, setTime } = useContext(MyContext);
  const push = useNavigate();
  const onFileChange = (result) => {
    setResult(result);
    let myTime = getTotalTime(result);
    setTime(myTime);
  };
  const onFileDelete = () => {
    setResult(null);
  };
  const buttonOnClick = () => {
    if (result) {
      push("/result");
    }
  };
  return (
    <div className="border rounded-lg shadow p-6 w-96 bg-white">
      <h1 className="text-2xl mb-5 font-semibold text-center">
        Calendar Utility
      </h1>
      <UploadFile
        onFileChange={(result) => onFileChange(result)}
        onFileDelete={() => onFileDelete()}
      />
      <div className="flex my-9 justify-center items-center">
        <Button text="Calcule" onClick={() => buttonOnClick()} />
      </div>
    </div>
  );
}

export default MainCard;
