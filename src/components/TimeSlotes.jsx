import React from "react";
import dayjs from "dayjs";

const generateTimeSlots = (startTime, endTime, interval) => {
  let slots = [];
  let current = dayjs(startTime);
  let end = dayjs(endTime);

  while (current.isBefore(end) || current.isSame(end)) {
    slots.push(current);
    current = current.add(interval, "minute");
  }

  return slots;
};

function TimeSlots({ selectedDate, selectedTime, setSelectedTime }) {
  const now = dayjs(); // Current time
  const isToday = selectedDate.isSame(now, "day"); // Check if selected date is today

  const startTime = isToday ? now.minute(Math.ceil(now.minute() / 10) * 10) : dayjs(selectedDate).hour(10).minute(0);
  const endTime = dayjs(selectedDate).hour(17).minute(0); // 5 PM
  const timeSlots = generateTimeSlots(startTime, endTime, 10); // Generate 10-min intervals

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-red-600">Available Slots:</h3>
      <div className="flex overflow-x-auto gap-2 mt-2 p-2">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md ${
              selectedTime && selectedTime.isSame(slot) ? "bg-red-50 text-red-500" : "bg-white"
            } hover:bg-gray-200`}
            onClick={() => setSelectedTime(slot)}
          >
            {slot.format("h:mm A")}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;
