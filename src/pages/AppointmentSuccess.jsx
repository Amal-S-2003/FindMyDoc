import React, { useContext } from "react";
import { AppointmentContext } from "../Context/AppointmentContext";
import { FaCheckCircle, FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

function AppointmentSuccess() {
  const { selectedDate, selectedTime, doctorName } = useContext(AppointmentContext);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Animated Success Message */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 md:p-10 rounded-xl shadow-lg flex flex-col items-center text-center"
      >
        {/* Success Icon */}
        <FaCheckCircle className="text-green-500 text-6xl mb-4" />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Appointment Confirmed!
        </h2>

        <p className="text-gray-600 mt-3 text-lg flex items-center gap-2">
          <FaUserMd className="text-red-500" /> Your appointment with
          <span className="font-semibold text-gray-900">Dr. {doctorName}</span> has been scheduled.
        </p>

        <p className="text-gray-600 mt-3 text-lg flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" /> Date: 
          <span className="font-semibold text-gray-900">{selectedDate.format("MMMM D, YYYY")}</span>
        </p>

        <p className="text-gray-600 mt-3 text-lg flex items-center gap-2">
          <FaClock className="text-yellow-500" /> Time:
          <span className="font-semibold text-gray-900">{selectedTime.format("h:mm A")}</span>
        </p>

        {/* Back to Home Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition"
          onClick={() => window.location.href = "/"}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}

export default AppointmentSuccess;
