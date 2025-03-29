import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaHospital } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// import DatePicker from "./DatePicker";
// import TimePickerComponent from "./TimePickerComponent";

const doctor = {
  id: 1,
  name: "Dr. John Doe",
  category: "Cardiologist",
  image: "/avatar.jpg",
  description: "Experienced in treating heart-related conditions with advanced care.",
  timing: "Mon - Fri: 9 AM - 5 PM",
  rating: 4.5,
  location: "New York, USA",
  workplace: "NYC Heart Clinic",
};

function DoctorDetails() {
  const navigate=useNavigate()

  return (
    <div className="p-10 md:p-20">
      <motion.div
        className="flex flex-col md:flex-row overflow-hidden "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between w-full md:w-2/3 p-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600 text-lg">{doctor.category}</p>
            <p className="text-gray-700 mt-3 text-sm md:text-base">{doctor.description}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between mt-4 text-sm md:text-base">
            <p className="flex items-center text-gray-600">
              <FaClock className="text-red-600 mr-2" /> {doctor.timing}
            </p>
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-red-600 mr-2" /> {doctor.location}
            </p>
            <p className="flex items-center text-gray-600">
              <FaHospital className="text-red-600 mr-2" /> {doctor.workplace}
            </p>
          </div>

      

          <div className="flex items-center justify-between mt-6">
            <p className="flex items-center text-yellow-500 font-bold">
              <FaStar className="mr-1" /> {doctor.rating}
            </p>
            <button 
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
              onClick={()=>navigate(`/book-appointment/${doctor.id}`)}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DoctorDetails;
