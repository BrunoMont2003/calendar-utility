import moment from "moment";
function getEvents(ics) {
  const arrayEventos = [];
  ics = ics.split("BEGIN:VEVENT");
  ics.shift();
  ics.forEach((e) => {
    let event = e.split("\n");
    const oEvent = {};
    event.forEach((prop) => {
      prop = prop.split(":");
      if (prop) {
        if (prop[0] === "SUMMARY") {
          oEvent[prop[0]] = prop[1].trim();
        }
        if (prop[0].startsWith("DTSTART")) {
          let date_start = formatIsoDate(prop[1]);
          date_start = moment(date_start).format("LLL");
          oEvent["DTSTART"] = date_start;
        }
        if (prop[0].startsWith("DTEND")) {
          let date_end = formatIsoDate(prop[1]);
          date_end = moment(date_end).format("LLL");
          oEvent["DTEND"] = date_end;
        }
      }
    });
    let includes =
      arrayEventos.filter(
        (e) =>
          e.DTEND === oEvent.DTEND &&
          e.DTSTART === oEvent.DTSTART &&
          e.SUMMARY === oEvent.SUMMARY
      ).length > 0;
    if (!includes) {
      let difference = getDifference(oEvent.DTSTART, oEvent.DTEND);
      oEvent.difference_in_minutes = difference;
      arrayEventos.push(oEvent);
    }
  });
  return arrayEventos;
}

const formatIsoDate = (date) => {
  //*date format comes like 20210616T090000
  //* YYYYMMDDTHHMM
  //* convert to this format: YYYY-MM-DDTHH:MM:SSZ
  let year = date.slice(0, 4);
  let month = date.slice(4, 6);
  let day = date.slice(6, 8);
  let hour = date.slice(9, 11);
  let min = date.slice(11, 13);
  let sec = "00";
  let newDate = new Date(year, month, day, hour, min, sec);
  return newDate;
};

const getDifference = (date_start, date_end) => {
  date_start = new Date(date_start);
  date_end = new Date(date_end);
  let diff = moment(date_end).diff(moment(date_start), "minutes");
  return diff;
};

export const getResult = (ics) => {
  const arrayEventos = getEvents(ics);
  const newList = [];
  arrayEventos.forEach((evento) => {
    let name = evento["SUMMARY"];
    let duration = evento.difference_in_minutes;
    const event_got = newList.find((ev) => ev.name === name);
    if (event_got) {
      event_got.time += duration;
    } else {
      let event = { name, time: duration };
      newList.push(event);
    }
  });
  return newList;
};
export const getTotalTime = (events) => {
  let time = 0;
  events.forEach((event) => {
    time += event.time;
  });
  return time;
};
