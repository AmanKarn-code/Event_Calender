import React from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
// import "./DayModal.css";

const DayModal = ({
  day,
  events,
  onClose,
  onAddEvent,
  onEditEvent,
  onDeleteEvent,
}) => {
  const hasEvents = events.length > 0;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-top">
          <h2>Events for <span>{day}</span></h2>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>
        {!hasEvents ? (
          <p>No events for this date.</p>
        ) : (
          <EventList
            events={events}
            onEdit={(event) => onEditEvent(day, event)}
            onDelete={(eventId) => onDeleteEvent(day, eventId)}
          />
        )}
        <EventForm day={day} onSubmit={onAddEvent} />
      </div>
    </div>
  );
};

export default DayModal;
