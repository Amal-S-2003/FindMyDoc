import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-bold font-mono">
            <span className="text-red-600 text-4xl">F</span>ind
            <span className="text-red-600 text-4xl">M</span>y
            <span className="text-red-600 text-4xl">D</span>oc
          </h1>
          <p className="mt-3 text-gray-400">Your trusted partner in healthcare solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">Find Doctor</li>
            <li className="hover:text-red-600 cursor-pointer">Services</li>
            <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Health St, MedCity</li>
            <li className="flex items-center gap-2"><FaPhone /> +1 234 567 890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@findmydoc.com</li>
          </ul>
          <div className="flex gap-4 mt-3">
            <FaFacebook className="text-2xl hover:text-red-600 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-red-600 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* User Response Section */}
        <div>
          <h2 className="text-xl font-semibold">Your Feedback</h2>
          <textarea 
            type="text" 
            placeholder="Enter your message..." 
            className="mt-3 w-full p-2 rounded-md text-white outline-2 outline-red-600" 
          />
          <button className="mt-3 w-full bg-red-600  text-white py-2 rounded-md hover:bg-red-700">
            Submit
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-gray-500">
        &copy; {new Date().getFullYear()} FindMyDoc. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
