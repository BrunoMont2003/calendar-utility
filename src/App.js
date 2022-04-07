import "./App.css";
import UploadFile from "./components/UploadFile";
function App() {
  const onFileChange = (file) => {
    // console.log(file);
  };
  return (
    <div className="bg-sky-50 min-h-screen p-5 flex justify-center items-center">
      <div className="border rounded-lg shadow p-6 w-96 bg-white">
        <h1 className="text-2xl mb-5 font-semibold text-center">
          Calendar Utility
        </h1>
        <UploadFile onFileChange={(file) => onFileChange(file)} />
      </div>
    </div>
  );
}

export default App;
