import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isTodayPlugin);
dayjs.extend(isLeapYear);

/**
 * Get the current month as a Day.js object.
 */
export const getCurrentMonth = () => dayjs();
export const getWeekDays = () => {
    return ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
};
/**
 * Get all days in the given month.
 * @param {Dayjs} currentMonth - The current month as a Day.js object.
 * @returns {Array<Dayjs>} - Array of Day.js objects representing each day in the month.
 */
export const getMonthDays = (currentMonth) => {
    const startOfMonth = currentMonth.startOf("month").startOf("week");
    const endOfMonth = currentMonth.endOf("month").endOf("week");

    let date = startOfMonth;
    const days = [];
    while (date.isBefore(endOfMonth)) {
        days.push(date);
        date = date.add(1, "day");
    }
    return days.map((d) => dayjs(d));
};

/**
 * Check if a given day is today.
 * @param {Dayjs} day - The day to check.
 * @returns {boolean} - True if the day is today, false otherwise.
 */
export const isToday = (day) => day.isToday();
