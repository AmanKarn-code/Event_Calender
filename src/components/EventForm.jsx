import React, { useState } from "react";
// import "./EventForm.css";

const EventForm = ({ day, onSubmit }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("work");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      name: eventName,
      startTime,
      endTime,
      description,
      category,
    };
    onSubmit(day, newEvent);
    setEventName("");
    setStartTime("");
    setEndTime("");
    setDescription("");
    setCategory("work");
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {/* <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="others">Others</option>
      </select> */}
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
