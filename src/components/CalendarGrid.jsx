import React from "react";
import { getMonthDays, getWeekDays } from "../utils/dateUtils";
// import "./CalendarGrid.css";

const CalendarGrid = ({ currentMonth, events, onDayClick }) => {
  const days = getMonthDays(currentMonth); // Days of the month
  const weekDays = getWeekDays(); // Weekdays: Sunday to Saturday

  return (
    <div className="calendar-grid-container">
      {/* Weekdays Header */}
      <div className="weekdays-row">
        {weekDays.map((day, index) => (
          <div key={index} className="weekday">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="calendar-grid">
        {days.map((day) => {
          const formattedDay = day.format("YYYY-MM-DD");
          const eventCount = (events[formattedDay] || []).length;

          return (
            <div
              key={formattedDay}
              className={`day ${day.isToday() ? "today" : ""}`}
              onClick={() => onDayClick(formattedDay)}
            >
              <span>{day.date()}</span>
              {eventCount > 0 && <div className="event-count">{eventCount}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
