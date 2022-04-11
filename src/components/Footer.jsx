import React from "react";

const Footer = () => {
  return (
    <div className="p-5 bg-sky-50 flex items-center justify-center">
      <span className="text-xs text-slate-500 font-semibold">
        Made by{" "}
        <a
          target="_blank"
          className="hover:text-blue-500"
          href="https://github.com/BrunoMont2003"
          rel="noreferrer"
        >
          Bruno
        </a>
      </span>
    </div>
  );
};

export default Footer;
