import React, { useContext, useRef } from "react";
import uploadImg from "../assets/upload.png";
import calendar from "../assets/calendar.png";
import Swal from "sweetalert2";
import { getResult } from "../logic/index";
import { MyContext } from "../context/MyContext";

const UploadFile = ({ onFileChange, onFileDelete }) => {
  const wrapperRef = useRef(null);
  const { file, setFile } = useContext(MyContext);
  const onDragEnter = () => wrapperRef.current.classList.add("opacity-60");
  const onDragLeave = () => wrapperRef.current.classlist.remove("opacity-60");
  const onDrop = () => wrapperRef.current.classList.remove("opacity-60");
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    const type = newFile.type.split("/")[1];
    if (newFile && type === "calendar") {
      setFile(newFile);
      readFile(newFile);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Upload a calendar (.ics) file",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
  const fileRemove = () => {
    setFile(null);
    onFileDelete();
  };
  const readFile = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let ics = reader.result;
      let array = getResult(ics);
      onFileChange(array);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };
  return (
    <>
      <div
        className="relative p-5 bg-gray-100 border-2 border-dashed rounded-xl border-black cursor-pointer hover:opacity-60 "
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="text-center flex flex-col items-center justify-center">
          <img src={uploadImg} alt="upload" className="w-24" />
          <p className="text-slate-500 mt-3">Drag & Drop your .ics file here</p>
        </div>
        <input
          type="file"
          multiple={false}
          value=""
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={(e) => {
            onFileDrop(e);
          }}
        />
      </div>
      {file && (
        <div className="overflow-hidden flex bg-blue-100 my-5 px-5 py-3 rounded-lg items-center relative file ">
          <img src={calendar} alt="file" className="w-16" />
          <div className="ml-5">
            <p className="">{file.name}</p>
            <p className="">{file.size}B</p>
          </div>
          <span
            className="bg-white w-10 h-10 rounded-full flex items-center justify-center absolute right-2 cursor-pointer opacity-0 ease-in-out delete-file duration-300"
            onClick={() => fileRemove()}
          >
            x
          </span>
        </div>
      )}
    </>
  );
};

export default UploadFile;
