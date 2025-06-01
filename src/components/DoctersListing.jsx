import React from "react";
import { FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    category: "Cardiologist",
    image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740",
    description: "Experienced in treating heart-related conditions with advanced care.",
    timing: "Mon - Fri: 9 AM - 5 PM",
    rating: 4.5,
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    category: "Dermatologist",
    image: "https://img.freepik.com/free-photo/doctor-using-tablet-computer-isolated-white-wall_231208-841.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740",
    description: "Specialist in skincare treatments and cosmetic dermatology.",
    timing: "Tue - Sat: 10 AM - 6 PM",
    rating: 4.8,
    location: "Los Angeles, USA",
  },
];

function DoctorsListing() {
    const navigate=useNavigate()
  return (
    <div className="px-10 md:px-20">


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {doctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg overflow-hidden p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Section */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between w-full md:w-2/3 p-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{doctor.name}</h2>
                <p className="text-gray-600 text-sm md:text-base">{doctor.category}</p>
                <p className="text-gray-700 mt-2 text-sm md:text-base">{doctor.description}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between mt-4 text-sm md:text-base">
                <p className="flex items-center text-gray-600">
                  <FaClock className="text-red-600 mr-2" /> {doctor.timing}
                </p>
                <p className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-red-600 mr-2" /> {doctor.location}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="flex items-center text-yellow-500 font-bold">
                  <FaStar className="mr-1" /> {doctor.rating}
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 " onClick={()=>navigate(`/doc-details/${doctor.id}`)}>
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsListing;
