import React from "react";
import { FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <div className="flex flex-col md:flex-row p-10 md:p-20 items-center justify-center gap-10">
      {/* Content Section */}
      <motion.div 
        className="content w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          <span className="text-red-600">Find</span> the Right Doctor, Anytime, Anywhere
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-2 flex items-center justify-center md:justify-start gap-2">
          <FaUserMd className="text-red-600" /> Your Health, Your Choice
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Finding the right doctor shouldn’t be complicated. With <span className="text-red-600 font-semibold">FindMyDoc</span>, you can easily search, compare, and book appointments with trusted healthcare professionals near you. Whether you need a routine check-up or a specialist consultation, we connect you with the best doctors, ensuring a seamless and stress-free experience. Prioritize your health with just a few clicks!
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="image w-full md:w-1/3 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="./homeDoc.png" alt="Doctor" className="w-full md:w-3/4" />
      </motion.div>
    </div>
  );
}

export default HomeBanner;
