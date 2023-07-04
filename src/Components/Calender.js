import { useEffect, useState } from "react";

const events = {
  "Sun Oct 09 2022": { name: "Birth day" },
  "Mon Oct 10 2022": { name: "Birth day 1" },
  "Fri Sep 09 2022": { name: "Birth day 3" }
};

export default function Calender() {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [event, setEvent] = useState(null);
  useEffect(() => {
    setCurrentMonth(date.getMonth());
  }, []);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const year = date.getFullYear();

  const numberOfDaysInAMonth = new Date(year, currentMonth + 1, 0).getDate();
  const firstDayOfTheMonth = new Date(year, currentMonth, 1).getDay();
  const daysInAMonth = new Array(numberOfDaysInAMonth)
    .fill(0)
    .map((val, index) => val + index + 1);

  const isCurrentDay = (currentday) =>
    currentMonth === date.getMonth() && currentday === date.getDate();

  const eventOfTheDay = (currentday) => {
    const key = new Date(year, currentMonth, currentday).toDateString();
    return events[key];
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "770px"
        }}
      >
        <h2
          style={{ textAlign: "left" }}
        >{`${monthNames[currentMonth]} ${year}`}</h2>
        <div>
          <button
            onClick={() => {
              setCurrentMonth((prev) => (12 + prev - 1) % 12);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              setCurrentMonth((prev) => (prev + 1) % 12);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div style={{ width: "770px", padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "16px",
            color: "#4285f4"
          }}
        >
          {weekDays.map((week) => (
            <span key={week}>{week}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {new Array(firstDayOfTheMonth).fill(0).map((day, index) => (
            <div
              style={{
                width: "100px",
                height: "100px",
                margin: "5px",
                color: "#4285f4"
              }}
              key={index}
            />
          ))}

          {daysInAMonth.map((day, index) => (
            <div
              style={{
                width: "100px",
                height: "100px",
                margin: "4px",
                border: "1px solid #4285f4",
                borderRadius: "5px",
                color: "#4285f4",
                cursor: "pointer"
              }}
              key={index}
              onClick={() => {
                setEvent(true);
              }}
            >
              {day}
              {isCurrentDay(day) && (
                <div
                  style={{ width: "100%", height: "4px", background: "red" }}
                />
              )}
              {eventOfTheDay(day) && (
                <div
                  style={{
                    width: "90%",
                    height: "18px",
                    background: "#4285f4",
                    color: "white",
                    fontSize: "12px"
                  }}
                >
                  {eventOfTheDay(day).name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
