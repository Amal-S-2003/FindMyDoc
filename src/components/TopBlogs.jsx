import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/young-smiling-attractive-slim-woman-doing-sport-exercises-morning-sunrise-beach-sports-wear-healthy-lifestyle-listening-music-earphones-making-selfie-photo-phone-looking-strong_285396-5537.jpg?ga=GA1.1.270275950.1719844196&semt=ais_hybrid&w=740",
    title: "10 Tips for a Healthier Life",
    rating: 4.8,
    views: 1200,
    doctor: { name: "Dr. John Doe", profile: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740" },
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/medium-shot-sad-woman-therapy_23-2149220297.jpg?ga=GA1.1.270275950.1719844196&semt=ais_hybrid&w=740",
    title: "Understanding Mental Health",
    rating: 4.7,
    views: 980,
    doctor: { name: "Dr. Sarah Smith", profile: "https://img.freepik.com/free-photo/doctor-using-tablet-computer-isolated-white-wall_231208-841.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740" },
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/indian-doctor-receives-patient-tells-him-about-results-tests-medicine-health_496169-2765.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740",
    title: "The Importance of Regular CheckUps",
    rating: 4.9,
    views: 1350,
    doctor: { name: "Dr. Emily Johnson", profile: "https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740" },
  },
];

function TopBlogs() {
  return (
    <div className="p-10 md:p-20 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">Top <span className="text-red-600">Blogs</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="border border-gray-300 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
            <div className="p-5 text-left">
              <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
              <div className="flex items-center gap-3 mt-2 text-gray-600">
                <FaStar className="text-yellow-500" /> {blog.rating}
                <FaEye /> {blog.views} Views
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img src={blog.doctor.profile} alt={blog.doctor.name} className="w-10 h-10 rounded-full border border-gray-300" />
                <p className="text-gray-700 font-medium">{blog.doctor.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TopBlogs;
