import React, { useContext } from "react";
import { AppointmentContext } from "../Context/AppointmentContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerComponent from "../components/DatePickerComponent";
import TimeSlots from "../components/TimeSlotes";
import { FaCalendarAlt, FaClock, FaCheck } from "react-icons/fa";

function AppointmentPage() {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime, handleAppointment } =
    useContext(AppointmentContext);

  return (
    <div className="p-6 md:p-10 min-h-screen flex flex-col items-center bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaCalendarAlt className="text-red-600" /> Fix Your Appointment
      </h2>

      <div className="mt-6 w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Calendar */}
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <FaCalendarAlt className="text-red-500" /> Select Date
              </h3>
              <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>

            {/* Time Slots */}
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <FaClock className="text-red-500" /> Select Time
              </h3>
              <TimeSlots selectedDate={selectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
            </div>
          </div>
        </LocalizationProvider>
      </div>

      {/* Fix Appointment Button */}
      <button
        onClick={handleAppointment}
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2 hover:bg-red-700 transition"
      >
        <FaCheck /> Fix Appointment
      </button>
    </div>
  );
}

export default AppointmentPage;
