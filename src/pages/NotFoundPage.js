import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-sky-50 min-h-screen flex flex-col items-center justify-center p-5">
      <img
        src="https://http.cat/404.jpg"
        alt="cat"
        className="h-96 shadow rounded-lg"
      />
      <Link
        to="/"
        className=" bg-green-500 text-white rounded px-5 my-5 py-2 hover:bg-green-600 ease-linear duration-200"
      >
        GO back
      </Link>
    </div>
  );
};

export default NotFoundPage;
