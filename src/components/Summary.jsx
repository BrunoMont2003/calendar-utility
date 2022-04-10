import moment from "moment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Summary = ({ events, file, time }) => {
  const push = useNavigate();
  useEffect(() => {
    if (!events || !file) {
      push("/");
    }
  });

  const getTime = (time) => {
    time = moment.duration(time, "minutes");
    let days = time._data.days;
    let hours = time._data.hours + days * 24;
    let minutes = time._data.minutes;
    let text = hours ? hours.toString() + " hours " : "";
    text += minutes ? minutes.toString() + " minutes " : "";

    let text_short = hours ? hours.toString() + "h " : "";
    text_short += minutes ? minutes.toString() + "m " : "";

    return {
      short: text_short,
      long: text,
    };
  };

  return (
    file &&
    events &&
    events.length && (
      <div className="sm:m-10 grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:mx-20 gap-5">
        <h1 className="text-3xl font-bold col-span-full text-center">
          {file.name}
        </h1>
        <h2 className="text-xl text-slate-600 font-bold mb-5 col-span-full text-center">
          <span className="mr-2">Total time per week:</span>
          <span>{getTime(time).long}</span>
        </h2>
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-sky-50 p-5 flex flex-col rounded-lg shadow"
          >
            <span className="font-semibold">{event.name}</span>
            <span className="mt-1 text-slate-600">
              {getTime(event.time).short}
            </span>
          </div>
        ))}
      </div>
    )
  );
};

export default Summary;
