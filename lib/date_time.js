"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamptoDateTimeNumerical = exports.getDateTime2 = exports.getTimeElapsed = exports.getDateTime = void 0;
const getDateTime = (ts = Date.now()) => {
    // Ensure `ts` is a number
    if (typeof ts === "string") {
        ts = parseInt(ts || "0", 10);
    }
    const date = new Date(ts);
    // Arrays for abbreviated day and month names
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Extract values
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dd = date.getDate().toString().padStart(2, "0");
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const mm = date.getMinutes().toString().padStart(2, "0");
    const ss = date.getSeconds().toString().padStart(2, "0");
    // Determine AM/PM and format hour
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh % 12 || 12; // Convert 0 or 24 to 12, and keep 1-12 as is
    // Human-friendly format: "Tue, 14 Feb 2025 02:30:15 PM"
    // return `${month} ${dd} ${hour12.toString().padStart(2, "0")}:${mm}:${ss} ${period}`;
    return `${day}, ${dd} ${month} ${yyyy} ${hour12.toString().padStart(2, "0")}:${mm}:${ss} ${period}`;
};
exports.getDateTime = getDateTime;
const getTimeElapsed = (epochTimestamp, currentTimestamp) => {
    const SECOND = 1000; // Milliseconds in a second
    const MINUTE = 60 * SECOND; // Milliseconds in a minute
    const HOUR = 60 * MINUTE; // Milliseconds in an hour
    const DAY = 24 * HOUR; // Milliseconds in a day
    const WEEK = 7 * DAY; // Milliseconds in a week
    // Calculate the difference in milliseconds
    const elapsedTime = currentTimestamp - epochTimestamp;
    if (elapsedTime < 0) {
        return "0s"; // Return 0 seconds if the timestamp is in the future
    }
    const weeks = Math.floor(elapsedTime / WEEK);
    const days = Math.floor((elapsedTime % WEEK) / DAY);
    const hours = Math.floor((elapsedTime % DAY) / HOUR);
    const minutes = Math.floor((elapsedTime % HOUR) / MINUTE);
    const seconds = Math.floor((elapsedTime % MINUTE) / SECOND);
    // Construct the readable format with abbreviations
    const parts = [];
    if (weeks > 0)
        parts.push(`${weeks}w`);
    if (days > 0)
        parts.push(`${days}d`);
    if (hours > 0)
        parts.push(`${hours}h`);
    if (minutes > 0)
        parts.push(`${minutes}m`);
    if (seconds > 0 || parts.length === 0)
        parts.push(`${seconds}s`);
    // Limit to a maximum of two parts
    return parts.slice(0, 2).join(" ");
};
exports.getTimeElapsed = getTimeElapsed;
const getDateTime2 = (ts = Date.now()) => {
    // Ensure `ts` is a number
    if (typeof ts === "string") {
        ts = parseInt(ts || "0", 10);
    }
    const date = new Date(ts);
    // Arrays for abbreviated day and month names
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Extract values
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dd = date.getDate().toString().padStart(2, "0");
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const mm = date.getMinutes().toString().padStart(2, "0");
    const ss = date.getSeconds().toString().padStart(2, "0");
    // Determine AM/PM and format hour
    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh % 12 || 12; // Convert 0 or 24 to 12, and keep 1-12 as is
    // Human-friendly format: "Tue, 14 Feb 2025 02:30:15 PM"
    return `${month} ${dd}, ${hour12.toString()} ${period}`;
    // return `${day}, ${dd} ${month} ${yyyy} ${hour12.toString().padStart(2, "0")}:${mm}:${ss} ${period}`;
};
exports.getDateTime2 = getDateTime2;
const timestamptoDateTimeNumerical = (timestamp) => {
    let d = new Date(timestamp);
    let y = d.getFullYear().toString();
    let m = (d.getMonth() + 1).toString();
    let dd = d.getDate().toString();
    let h = d.getHours().toString();
    let mm = d.getMinutes().toString();
    m = m.length == 1 ? `0${m}` : m;
    dd = dd.length == 1 ? `0${dd}` : dd;
    h = h.length == 1 ? `0${h}` : h;
    mm = mm.length == 1 ? `0${mm}` : mm;
    return `${y}${m}${dd}${h}${mm}00`;
};
exports.timestamptoDateTimeNumerical = timestamptoDateTimeNumerical;
