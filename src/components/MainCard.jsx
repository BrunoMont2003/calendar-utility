import { useState } from "react";
import Button from "./Button";
import UploadFile from "./UploadFile";

function MainCard() {
  const [result, setResult] = useState(null);
  const [click, setClick] = useState(false);
  const onFileChange = (result) => {
    setResult(result);
  };
  const onFileDelete = () => {
    setClick(false);
    setResult(null);
  };
  const buttonOnClick = () => {
    if (result) {
      console.log(result);
      setClick(true);
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
