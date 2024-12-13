const EVENTS_STORAGE_KEY = "calendar_events";

/**
 * Save events to localStorage.
 * @param {Object} events - The events object to save.
 */
export const saveEvents = (events) => {
  localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
};

/**
 * Retrieve events from localStorage.
 * @returns {Object} - The events object retrieved from localStorage, or an empty object if none exists.
 */
export const getEvents = () => {
  const storedEvents = localStorage.getItem(EVENTS_STORAGE_KEY);
  return storedEvents ? JSON.parse(storedEvents) : {};
};

