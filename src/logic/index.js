import moment from "moment";
export function getCourses(ics) {
  const arrayEventos = [];
  ics = ics.split("BEGIN:VEVENT");
  console.log(ics[1]);
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
          console.log(prop[1]);
          oEvent["DTSTART"] = prop[1].trim();
        }
        if (prop[0].startsWith("DTEND")) {
          oEvent["DTEND"] = prop[1].trim();
        }
      }
    });
    arrayEventos.push(oEvent);
  });
  return arrayEventos;
}
