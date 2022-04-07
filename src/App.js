import "./App.css";
import UploadFile from "./components/UploadFile";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-5 flex justify-center items-center">
      <div className="border rounded shadow p-5 w-96 bg-white">
        <UploadFile />
      </div>
    </div>
  );
}

export default App;
