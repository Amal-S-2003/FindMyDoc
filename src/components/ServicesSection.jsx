import React from "react";
import { FaUserMd, FaStar, FaSearchLocation, FaCalendarCheck, FaFilter, FaBell, FaHistory } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaUserMd className="text-red-600 text-4xl" />, title: "Find The Good Doctors", description: "Easily search and connect with top-rated doctors in your area." },
  { icon: <FaStar className="text-red-600 text-4xl" />, title: "Rate and Review Doctors", description: "Share your experience and help others by rating and reviewing doctors." },
  { icon: <FaSearchLocation className="text-red-600 text-4xl" />, title: "Search Nearby Doctors", description: "Locate doctors near you quickly with our powerful search tool." },
  { icon: <FaCalendarCheck className="text-red-600 text-4xl" />, title: "Schedule Appointments", description: "Book appointments with ease and manage your schedule hassle-free." },
  { icon: <FaFilter className="text-red-600 text-4xl" />, title: "Filter by Category", description: "Find doctors based on their specialization and expertise." },
  { icon: <FaBell className="text-red-600 text-4xl" />, title: "Notifications & Alerts", description: "Get reminders and updates about your upcoming appointments." },
  { icon: <FaHistory className="text-red-600 text-4xl" />, title: "Appointment & Treatment History", description: "Access your past appointments and treatment records anytime." },
];

function ServicesSection() {
  return (
    <div className="p-10 md:p-20 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Our <span className="text-red-600">Services</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="p-6 border border-gray-300 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {service.icon}
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
