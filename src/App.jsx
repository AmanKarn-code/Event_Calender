import React, { useState, useEffect } from "react";
import CalendarGrid from "./components/CalendarGrid";
import DayModal from "./components/DayModal";
import { getCurrentMonth, isToday } from "./utils/dateUtils";
import { saveEvents, getEvents } from "./utils/storageUtils";
// import "./App.css";

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [events, setEvents] = useState(getEvents());
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const handleAddEvent = (day, newEvent) => {
    setEvents({
      ...events,
      [day]: [...(events[day] || []), newEvent],
    });
  };

  const handleEditEvent = (day, updatedEvent) => {
    setEvents({
      ...events,
      [day]: events[day].map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      ),
    });
  };
  

  const handleDeleteEvent = (day, eventId) => {
    setEvents({
      ...events,
      [day]: events[day].filter((event) => event.id !== eventId),
    });
  };

  return (
    <div className="app">
      <h1 className="heading">Event Calender</h1>
      <head className="month-head">
        <button onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}>
          Previous
        </button>
        <h2 className="curr-month">{currentMonth.format("MMMM YYYY")}</h2>
        <button onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}>
          Next
        </button>
      </head>
      <CalendarGrid
        currentMonth={currentMonth}
        events={events}
        onDayClick={(day) => setSelectedDay(day)}
      />
      {selectedDay && (
        <DayModal
          day={selectedDay}
          events={events[selectedDay] || []}
          onClose={() => setSelectedDay(null)}
          onAddEvent={handleAddEvent}
          onEditEvent={handleEditEvent}
          onDeleteEvent={handleDeleteEvent}
        />
      )}
    </div>
  );
};

export default App;
