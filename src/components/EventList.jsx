import React, { useState } from "react";
// import "./EventList.css";

const EventList = ({ events, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedEvent, setEditedEvent] = useState({});

  const handleEditToggle = (event) => {
    setIsEditing(event.id);
    setEditedEvent({ ...event });
  };

  const handleSave = () => {
    onEdit(editedEvent);
    setIsEditing(null);
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className={`event-item ${event.category}`}>
          {isEditing === event.id ? (
            <>
              <input
                type="text"
                value={editedEvent.name}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, name: e.target.value })
                }
                placeholder="Event Name"
              />
              <input
                type="time"
                value={editedEvent.startTime}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, startTime: e.target.value })
                }
              />
              <input
                type="time"
                value={editedEvent.endTime}
                onChange={(e) =>
                  setEditedEvent({ ...editedEvent, endTime: e.target.value })
                }
              />
              <textarea
                value={editedEvent.description}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    description: e.target.value,
                  })
                }
              ></textarea>
              <div className="eventlist-btn">
              <button onClick={handleSave}>Save</button>
              <button className="del" onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h3>{event.name}</h3>
              <p>
                {event.startTime} - {event.endTime}
              </p>
              <p>{event.description}</p>
              <button onClick={() => handleEditToggle(event)}>Edit</button>
              <button className="del" onClick={() => onDelete(event.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventList;
