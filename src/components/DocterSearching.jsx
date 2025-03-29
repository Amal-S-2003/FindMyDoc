
import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";

function DocterSearching() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchLocationSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=30502f9f63034d13aa4fa9a1d30217cb`
        );
        const data = await response.json();
        setSuggestions(data.features.map((feature) => feature.properties.formatted));
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="px-10 md:px-20 md:py-10">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center bg-gray-100 p-5 rounded-lg shadow-sm">
        <div className="flex items-center bg-white p-3 rounded-lg w-full md:w-1/3 border border-gray-300">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search doctor by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ml-2 outline-none"
          />
        </div>

        <div className="relative w-full md:w-1/3">
          <div className="flex items-center bg-white p-3 rounded-lg border border-gray-300">
            <FaMapMarkerAlt className="text-red-600" />
            <input
              type="text"
              placeholder="Filter by location..."
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                fetchLocationSuggestions(e.target.value);
              }}
              className="w-full ml-2 outline-none"
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-auto rounded-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setLocation(suggestion);
                    setSuggestions([]);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center bg-white p-3 rounded-lg w-full md:w-1/3 border border-gray-300">
          <FaUserMd className="text-gray-500" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full ml-2 outline-none bg-transparent"
          >
            <option value="">Select Category</option>
            <option value="General Physician">General Physician</option>
            <option value="Dentist">Dentist</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
          </select>
        </div>
      </div>

      {/* Doctor List Section */}
      <div className="mt-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Find Your <span className="text-red-600">Doctor</span>
        </h1>
      </div>
    </div>
  );
}

export default DocterSearching;
