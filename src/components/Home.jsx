import {
  faAngleRight,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen p-5 sm_px-8 md:px-20 text-white flex flex-col md:justify-center items-center">
      <div className="px-5 py-10 flex items-center justify-center flex-col shadow">
        <h1 className=" text-4xl border-b-2 pb-2 my-5 w-fit font-bold">
          Calendar Tool
        </h1>
        <p className="text-center text-orange-300">
          Find out the total work time registered in your calendar.
        </p>
        <div className="my-5">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get Started
            </span>
          </button>
        </div>
      </div>
      <div className="px-5 py-10 flex items-center justify-center flex-col  rounded-md">
        <h2 className="text-xl mb-5 font-medium ">
          Export your Google Calendar
        </h2>
        <ol className="list-decimal text-justify">
          <li className="my-5">
            On your computer, open{" "}
            <a
              href="https://calendar.google.com/calendar"
              target="_blank"
              rel="noreferrer"
              className="hover:font-bold ease-in-out duration-300"
            >
              <span className="text-red-300">Google </span>
              <span className="text-green-300">Calendar</span>
            </a>{" "}
            . You can't export events from the Google Calendar app.
          </li>
          <li className="my-5">
            On the left side of the page, find the{" "}
            <b className="text-yellow-100">"My calendars"</b> section. You might
            need to click to expand it.
          </li>
          <li className="my-5">
            Point to the calendar you want to export, click More{" "}
            <FontAwesomeIcon
              className="mr-3 text-slate-400"
              icon={faEllipsisVertical}
            />
            <FontAwesomeIcon
              className="mr-3 text-slate-400"
              icon={faAngleRight}
            />
            and then <b> Settings and sharing</b>.
          </li>
          <li className="my-5">
            Under "Calendar settings," click <b> Export calendar</b>.
          </li>
          <li className="my-5">
            An <b className="text-yellow-300"> ICS</b> file of your events will
            start to download.
          </li>
          <li className="my-5">
            More info
            <a
              className="ml-2 text-purple-500"
              href="https://support.google.com/calendar/answer/37111"
              target="_blank"
              rel="noreferrer"
            >
              Here
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
