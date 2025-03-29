import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

function DatePickerComponent({ selectedDate, setSelectedDate }) {
  const today = dayjs(); // Get today's date

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-red-600 font-semibold text-lg mb-2">Select Date</h3>
      <DateCalendar
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
        disablePast // Disable past dates
      />
    </div>
  );
}

export default DatePickerComponent;
