import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Summary from "./components/Summary";
import UploadFile from "./components/UploadFile";
function App() {
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
    <>
      <div className="bg-sky-50 min-h-screen p-5 flex justify-center items-center">
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
      </div>
      {click && <Summary />}
    </>
  );
}

export default App;
