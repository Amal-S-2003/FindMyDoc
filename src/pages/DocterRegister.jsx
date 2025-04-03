import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Mail,
  Phone,
  User,
  MapPin,
  Home,
  Hospital,
  Calendar,
  User2,
  Award,
  FileText,
  ClipboardList,
  PlusCircle,
  Trash2,
  CalendarDays,
  Clock,
  Lock,
} from "lucide-react";
import Select from "react-select";

function DoctorRegister() {
  const [step, setStep] = useState(1);
  const [profilePic, setProfilePic] = useState("/no-profile.png");
  const [specialization, setSpecialization] = useState("");
  const [qualifications, setQualifications] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [awards, setAwards] = useState([]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };
  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);
  const specializationOptions = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "dermatology", label: "Dermatology" },
  ];

  const qualificationOptions = [
    { value: "MBBS", label: "MBBS" },
    { value: "MD", label: "MD" },
    { value: "MS", label: "MS" },
    { value: "DO", label: "DO" },
    { value: "DM", label: "DM" },
  ];
  const [experiences, setExperiences] = useState([{ place: "", years: "" }]);

  // Handle adding a new experience field
  const handleAddExperience = () => {
    setExperiences([...experiences, { place: "", years: "" }]);
  };

  // Handle removing an experience field
  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  // Handle updating experience input fields
  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const handleCertificateUpload = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;
    let newCerts = [...certificates];
    newCerts[index].file = file;
    setCertificates(newCerts);
  };

  const handleAddCertificate = () => {
    setCertificates([...certificates, { file: null, description: "" }]);
  };

  const handleAwardUpload = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;
    let newAwards = [...awards];
    newAwards[index].file = file;
    setAwards(newAwards);
  };

  const handleAddAward = () => {
    setAwards([...awards, { file: null, description: "" }]);
  };
  const handleDeleteExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteCertificate = (index) => {
    setCertificates((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteAward = (index) => {
    setAwards((prev) => prev.filter((_, i) => i !== index));
  };
  const [availability, setAvailability] = useState({
    Monday: { start: "", end: "", notAvailable: false },
    Tuesday: { start: "", end: "", notAvailable: false },
    Wednesday: { start: "", end: "", notAvailable: false },
    Thursday: { start: "", end: "", notAvailable: false },
    Friday: { start: "", end: "", notAvailable: false },
    Saturday: { start: "", end: "", notAvailable: false },
    Sunday: { start: "", end: "", notAvailable: false },
  });

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="p-6 w-full max-w-2xl bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500 ">
          Doctor Registration
        </h2>

        {step === 1 && (
          <motion.div
            className="max-w-2xl mx-auto p-6 bg-white  rounded-xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <label className="cursor-pointer relative">
                  <img
                    src={profilePic}
                    alt="profile pic"
                    className="w-28 h-28 rounded-full border-4 border-gray-500 shadow-md"
                  />
                  <input type="file" hidden onChange={handleImageChange} />
                  <Camera className="absolute bottom-2 right-2 bg-white p-1 rounded-full border border-gray-300 w-8 h-8 text-red-500" />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-red-500" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-red-500" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-red-500" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:col-span-2">
                <div className="relative">
                  <User2 className="absolute left-3 top-3 text-red-500" />
                  <select className="pl-10 p-2 border border-gray-300 rounded w-full bg-white">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="absolute left-2 font-medium top-2 text-sm text-red-500 bg-white px-1">
                    Date of Birth
                  </label>
                  <Calendar className="absolute left-3 top-8 text-red-500" />
                  <input
                    type="date"
                    className="pl-10 pt-6 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="relative">
                  <Home className="absolute left-3 top-3 text-red-500" />
                  <input
                    type="text"
                    placeholder="Address"
                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-red-500" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div className="relative">
                  <Hospital className="absolute left-3 top-3 text-red-500" />
                  <input
                    type="text"
                    placeholder="Hospital"
                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Medical Registration Number */}
            <div className="relative mb-4">
              <ClipboardList className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500" />
              <input
                type="text"
                placeholder="Medical Registration Number"
                className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Specialization */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                Specialization
              </label>
              <Select
                options={specializationOptions}
                isMulti
                placeholder="Select Specialization"
              />
            </div>

            {/* Qualifications */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                Qualifications
              </label>
              <Select
                options={qualificationOptions}
                isMulti
                placeholder="Select Qualifications"
              />
            </div>

            {/* Experience Section */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Work Experience
              </label>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 items-center mb-3"
                >
                  <input
                    type="text"
                    placeholder="Hospital/Organization"
                    className="w-full md:w-2/3 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    value={exp.place}
                    onChange={(e) =>
                      handleExperienceChange(index, "place", e.target.value)
                    }
                  />
                  <input
                    type="number"
                    placeholder="Years"
                    className="w-full md:w-1/3 py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    min="0"
                    onWheel={(e) => e.target.blur()}
                    value={exp.years}
                    onChange={(e) =>
                      handleExperienceChange(index, "years", e.target.value)
                    }
                  />
                  {/* Delete Button */}
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteExperience(index)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="flex items-center gap-2 text-red-500 hover:text-red-700"
                onClick={handleAddExperience}
              >
                <PlusCircle className="w-6 h-6" /> Add Experience
              </button>
            </div>

            {/* Certificates Upload */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Upload Certificates
              </label>
              {certificates.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-40 py-2 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-red-400 focus:outline-none"
                    onChange={(e) => handleCertificateUpload(e, index)}
                  />
                  <input
                    type="text"
                    placeholder="Certificate Description"
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    value={cert.description}
                    onChange={(e) =>
                      handleCertificateChange(index, e.target.value)
                    }
                  />
                  {/* Delete Button */}
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteCertificate(index)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="flex items-center gap-2 text-red-500 hover:text-red-700"
                onClick={handleAddCertificate}
              >
                <PlusCircle className="w-6 h-6" /> Add Certificate
              </button>
            </div>

            {/* Awards Upload */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Upload Awards
              </label>
              {awards.map((award, index) => (
                <div key={index} className="flex items-center gap-4 mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-40 py-2 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-red-400 focus:outline-none"
                    onChange={(e) => handleAwardUpload(e, index)}
                  />
                  <input
                    type="text"
                    placeholder="Award Description"
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                    value={award.description}
                    onChange={(e) => handleAwardChange(index, e.target.value)}
                  />
                  {/* Delete Button */}
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteAward(index)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="flex items-center gap-2 text-red-500 hover:text-red-700"
                onClick={handleAddAward}
              >
                <PlusCircle className="w-6 h-6" /> Add Award
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-300"
          >
            {/* Weekly Availability Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border border-gray-300 rounded-lg p-4"
            >
              <label className="flex items-center text-red-600 font-semibold mb-3">
                <CalendarDays className="w-5 h-5 mr-2 text-red-500" /> Doctor
                Availability (Weekly)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(availability).map((day) => (
                  <motion.div
                    key={day}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col bg-gray-50 p-3 rounded-md shadow-sm"
                  >
                    <label className="text-red-600 text-sm font-medium">
                      {day}
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="time"
                        className="p-2 border border-gray-300 rounded w-1/2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        disabled={availability[day].notAvailable}
                        value={availability[day].start}
                        onChange={(e) =>
                          handleAvailabilityChange(day, "start", e.target.value)
                        }
                      />
                      <input
                        type="time"
                        className="p-2 border border-gray-300 rounded w-1/2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                        disabled={availability[day].notAvailable}
                        value={availability[day].end}
                        onChange={(e) =>
                          handleAvailabilityChange(day, "end", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id={`notAvailable-${day}`}
                        className="mr-2"
                        checked={availability[day].notAvailable}
                        onChange={(e) =>
                          handleAvailabilityChange(
                            day,
                            "notAvailable",
                            e.target.checked
                          )
                        }
                      />
                      <label
                        htmlFor={`notAvailable-${day}`}
                        className="text-gray-600 text-sm"
                      >
                        Not Available
                      </label>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Average Consultation Time */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border border-gray-300 rounded-lg p-4"
            >
              <label className="flex items-center text-red-600 font-semibold mb-2">
                <Clock className="w-5 h-5 mr-2 text-red-500" /> Average
                Consultation Time
              </label>
              <select className="p-2 border border-gray-300 rounded w-full bg-gray-50 focus:ring-2 focus:ring-red-400 focus:outline-none">
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </motion.div>

            {/* Password Fields */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="grid grid-cols-1 gap-3 border border-gray-300 rounded-lg p-4"
            >
              <label className="flex items-center text-red-600 font-semibold">
                <Lock className="w-5 h-5 mr-2 text-red-500" /> Set Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded w-full bg-gray-50 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 border border-gray-300 rounded w-full bg-gray-50 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </motion.div>
          </motion.div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 font-medium bg-red-600 text-white rounded hover:bg-red-700 transition ml-auto"
            >
              Next
            </button>
          ) : (
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition ml-auto">
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
