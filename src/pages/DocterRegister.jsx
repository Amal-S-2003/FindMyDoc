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
  Trash2,
  CalendarDays,
  Clock,
  Lock,
  PlusCircle,
  ClipboardList,
} from "lucide-react";
import Select from "react-select";

function DoctorRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePic: "/no-profile.png",
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    address: "",
    location: "",
    hospital: "",
    medicalRegNumber: "",
    specializations: [],
    qualifications: [],
    experiences: [{ place: "", years: "" }],
    certificates: [{ file: null, description: "" }],
    awards: [{ file: null, description: "" }],
    availability: {
      Monday: { start: "", end: "", notAvailable: false },
      Tuesday: { start: "", end: "", notAvailable: false },
      Wednesday: { start: "", end: "", notAvailable: false },
      Thursday: { start: "", end: "", notAvailable: false },
      Friday: { start: "", end: "", notAvailable: false },
      Saturday: { start: "", end: "", notAvailable: false },
      Sunday: { start: "", end: "", notAvailable: false },
    },
    consultationTime: "15",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleInputChange("profilePic", URL.createObjectURL(file));
    }
  };

  const validateStep1 = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
      isValid = false;
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
      isValid = false;
    }
    if (!formData.location) {
      newErrors.location = "Location is required";
      isValid = false;
    }
    if (!formData.hospital) {
      newErrors.hospital = "Hospital is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.medicalRegNumber) {
      newErrors.medicalRegNumber = "Medical Registration Number is required";
      isValid = false;
    }
    if (formData.specializations.length === 0) {
      newErrors.specializations = "At least one specialization is required";
      isValid = false;
    }
    if (formData.qualifications.length === 0) {
      newErrors.qualifications = "At least one qualification is required";
      isValid = false;
    }
    if (formData.experiences.some((exp) => !exp.place || !exp.years)) {
      newErrors.experiences = "All experience fields are required";
      isValid = false;
    }
    if (formData.certificates.some((cert) => !cert.description)) {
      newErrors.certificates = formData.certificates.map((cert) => !cert.description ? "Description is required" : "");
      isValid = false;
    }
    if (formData.awards.some((award) => !award.description)) {
      newErrors.awards = formData.awards.map((award) => !award.description ? "Description is required" : "");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep3 = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    let isValid = true;
    if (step === 1) isValid = validateStep1();
    if (step === 2) isValid = validateStep2();

    if (isValid) setStep((prev) => prev + 1);
  };
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index][field] = value;
    handleInputChange("experiences", newExperiences);
  };

  const handleAddExperience = () => {
    handleInputChange("experiences", [...formData.experiences, { place: "", years: "" }]);
  };

  const handleDeleteExperience = (index) => {
    handleInputChange(
      "experiences",
      formData.experiences.filter((_, i) => i !== index)
    );
  };

  const handleCertificateUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newCertificates = [...formData.certificates];
      newCertificates[index].file = file;
      handleInputChange("certificates", newCertificates);
    }
  };

  const handleCertificateChange = (index, description) => {
    const newCertificates = [...formData.certificates];
    newCertificates[index].description = description;
    handleInputChange("certificates", newCertificates);
  };

  const handleAddCertificate = () => {
    handleInputChange("certificates", [...formData.certificates, { file: null, description: "" }]);
  };

  const handleDeleteCertificate = (index) => {
    handleInputChange(
      "certificates",
      formData.certificates.filter((_, i) => i !== index)
    );
  };

  const handleAwardUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newAwards = [...formData.awards];
      newAwards[index].file = file;
      handleInputChange("awards", newAwards);
    }
  };

  const handleAwardChange = (index, description) => {
    const newAwards = [...formData.awards];
    newAwards[index].description = description;
    handleInputChange("awards", newAwards);
  };

  const handleAddAward = () => {
    handleInputChange("awards", [...formData.awards, { file: null, description: "" }]);
  };

  const handleDeleteAward = (index) => {
    handleInputChange("awards", formData.awards.filter((_, i) => i !== index));
  };

  const handleAvailabilityChange = (day, field, value) => {
    setFormData((prev) => ({
      ...prev,
      availability: { ...prev.availability, [day]: { ...prev.availability[day], [field]: value } },
    }));
  };

  const handleRequestForRegister = () => {
    if (validateStep3()) {
      console.log("Registration Data:", formData);
      return formData;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="p-6 w-full max-w-2xl bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500 ">Doctor Registration</h2>

        {/* Form Steps */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <label className="cursor-pointer relative">
                  <img src={formData.profilePic} alt="profile pic" className="w-28 h-28 rounded-full border-4 border-gray-500 shadow-md" />
                  <input type="file" hidden onChange={handleImageChange} />
                  <Camera className="absolute bottom-2 right-2 bg-white p-1 rounded-full border border-gray-300 w-8 h-8 text-red-500" />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-red-500" />
                  <input type="text" placeholder="Full Name" className={`pl-10 p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-red-500" />
                  <input type="email" placeholder="Email" className={`pl-10 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-red-500" />
                  <input type="tel" placeholder="Phone Number" className={`pl-10 p-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.phoneNumber} onChange={(e) => handleInputChange("phoneNumber", e.target.value)} />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:col-span-2">
                <div className="relative">
                  <User2 className="absolute left-3 top-3 text-red-500" />
                  <select className={`pl-10 p-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded w-full bg-white`} value={formData.gender} onChange={(e) => handleInputChange("gender", e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
                <div className="relative">
                  <label className="absolute left-2 font-medium top-2 text-sm text-red-500 bg-white px-1">Date of Birth</label>
                  <Calendar className="absolute left-3 top-8 text-red-500" />
                  <input type="date" className={`pl-10 pt-6 p-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.dob} onChange={(e) => handleInputChange("dob", e.target.value)}/>
                  {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                </div>
                <div className="relative">
                  <Home className="absolute left-3 top-3 text-red-500" />
                  <input type="text" placeholder="Address" className={`pl-10 p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.address} onChange={(e) => handleInputChange("address", e.target.value)}/>
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-red-500" />
                  <input type="text" placeholder="Location" className={`pl-10 p-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.location} onChange={(e) => handleInputChange("location", e.target.value)}/>
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>
                <div className="relative">
                  <Hospital className="absolute left-3 top-3 text-red-500" />
                  <input type="text" placeholder="Hospital" className={`pl-10 p-2 border ${errors.hospital ? 'border-red-500' : 'border-gray-300'} rounded w-full`} value={formData.hospital} onChange={(e) => handleInputChange("hospital", e.target.value)}/>
                  {errors.hospital && <p className="text-red-500 text-sm mt-1">{errors.hospital}</p>}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative mb-4">
              <ClipboardList className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500" />
              <input type="text" placeholder="Medical Registration Number" className={`w-full pl-12 py-3 border ${errors.medicalRegNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none`} value={formData.medicalRegNumber} onChange={(e) => handleInputChange("medicalRegNumber", e.target.value)} />
              {errors.medicalRegNumber && <p className="text-red-500 text-sm mt-1">{errors.medicalRegNumber}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">Specialization</label>
              <Select options={specializationOptions} isMulti placeholder="Select Specialization" value={formData.specializations} onChange={(selectedOptions) => handleInputChange("specializations", selectedOptions)} className={errors.specializations ? "border border-red-500 rounded" : ""}/>
              {errors.specializations && <p className="text-red-500 text-sm mt-1">{errors.specializations}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">Qualifications</label>
              <Select options={qualificationOptions} isMulti placeholder="Select Qualifications" value={formData.qualifications} onChange={(selectedOptions) => handleInputChange("qualifications", selectedOptions)} className={errors.qualifications ? "border border-red-500 rounded" : ""}/>
              {errors.qualifications && <p className="text-red-500 text-sm mt-1">{errors.qualifications}</p>}
            </div>

            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">Work Experience</label>
              {formData.experiences.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 items-center mb-3">
                  <input type="text" placeholder="Hospital/Organization" className={`w-full md:w-2/3 py-3 px-4 border ${errors.experiences ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none`} value={exp.place} onChange={(e) => handleExperienceChange(index, "place", e.target.value)} />
                  <input type="number" placeholder="Years" className={`w-full md:w-1/3 py-3 px-4 border ${errors.experiences ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none`} min="0" onWheel={(e) => e.target.blur()} value={exp.years} onChange={(e) => handleExperienceChange(index, "years", e.target.value)} />
                  <button type="button" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteExperience(index)}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {errors.experiences && <p className="text-red-500 text-sm mt-1">{errors.experiences}</p>}
              <button type="button" className="flex items-center gap-2 text-red-500 hover:text-red-700" onClick={handleAddExperience}>
                <PlusCircle className="w-6 h-6" /> Add Experience
              </button>
            </div>

            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">Upload Certificates</label>
              {formData.certificates.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 mb-3">
                  <input type="file" accept="image/*" className="w-40 py-2 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-red-400 focus:outline-none" onChange={(e) => handleCertificateUpload(e, index)} />
                  <input type="text" placeholder="Certificate Description" className={`w-full py-2 px-4 border ${errors.certificates && errors.certificates[index] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none`} value={cert.description} onChange={(e) => handleCertificateChange(index, e.target.value)} />
                  <button type="button" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteCertificate(index)}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                  {errors.certificates && errors.certificates[index] && <p className="text-red-500 text-sm mt-1">{errors.certificates[index]}</p>}
                </div>
              ))}
              <button type="button" className="flex items-center gap-2 text-red-500 hover:text-red-700" onClick={handleAddCertificate}>
                <PlusCircle className="w-6 h-6" /> Add Certificate
              </button>
            </div>

            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">Upload Awards</label>
              {formData.awards.map((award, index) => (
                <div key={index} className="flex items-center gap-4 mb-3">
                  <input type="file" accept="image/*" className="w-40 py-2 border border-gray-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-red-400 focus:outline-none" onChange={(e) => handleAwardUpload(e, index)} />
                  <input type="text" placeholder="Award Description" className={`w-full py-2 px-4 border ${errors.awards && errors.awards[index] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none`} value={award.description} onChange={(e) => handleAwardChange(index, e.target.value)} />
                  <button type="button" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteAward(index)}>
                    <Trash2 className="w-5 h-5" />
                  </button>
                  {errors.awards && errors.awards[index] && <p className="text-red-500 text-sm mt-1">{errors.awards[index]}</p>}
                </div>
              ))}
              <button type="button" className="flex items-center gap-2 text-red-500 hover:text-red-700" onClick={handleAddAward}>
                <PlusCircle className="w-6 h-6" /> Add Award
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-300 rounded-lg p-4">
              <label className="flex items-center text-red-600 font-semibold mb-3">
                <CalendarDays className="w-5 h-5 mr-2 text-red-500" /> Doctor Availability (Weekly)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(formData.availability).map((day) => (
                  <motion.div key={day} whileHover={{ scale: 1.02 }} className="flex flex-col bg-gray-50 p-3 rounded-md shadow-sm">
                    <label className="text-red-600 text-sm font-medium">{day}</label>
                    <div className="flex items-center gap-2 mt-1">
                      <input type="time" className="p-2 border border-gray-300 rounded w-1/2 focus:ring-2 focus:ring-red-400 focus:outline-none" disabled={formData.availability[day].notAvailable} value={formData.availability[day].start} onChange={(e) => handleAvailabilityChange(day, "start", e.target.value)} />
                      <input type="time" className="p-2 border border-gray-300 rounded w-1/2 focus:ring-2 focus:ring-red-400 focus:outline-none" disabled={formData.availability[day].notAvailable} value={formData.availability[day].end} onChange={(e) => handleAvailabilityChange(day, "end", e.target.value)} />
                    </div>
                    <div className="flex items-center mt-2">
                      <input type="checkbox" id={`notAvailable-${day}`} className="mr-2" checked={formData.availability[day].notAvailable} onChange={(e) => handleAvailabilityChange(day, "notAvailable", e.target.checked)} />
                      <label htmlFor={`notAvailable-${day}`} className="text-gray-600 text-sm">Not Available</label>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-300 rounded-lg p-4">
              <label className="flex items-center text-red-600 font-semibold mb-2">
                <Clock className="w-5 h-5 mr-2 text-red-500" /> Average Consultation Time
              </label>
              <select className="p-2 border border-gray-300 rounded w-full bg-gray-50 focus:ring-2 focus:ring-red-400 focus:outline-none" value={formData.consultationTime} onChange={(e) => handleInputChange("consultationTime", e.target.value)}>
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="grid grid-cols-1 gap-3 border border-gray-300 rounded-lg p-4">
              <label className="flex items-center text-red-600 font-semibold">
                <Lock className="w-5 h-5 mr-2 text-red-500" /> Set Password
              </label>
              <input type="password" placeholder="Password" className={`p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded w-full bg-gray-50 focus:ring-2 focus:ring-red-400 focus:outline-none`} value={formData.password} onChange={(e) => handleInputChange("password", e.target.value)} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              <input type="password" placeholder="Confirm Password" className={`p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded w-full bg-gray-50 focus:ring-2 focus:ring-red-400 focus:outline-none`} value={formData.confirmPassword} onChange={(e) => handleInputChange("confirmPassword", e.target.value)} />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </motion.div>
          </motion.div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={handlePrev} className="px-4 py-2 bg-gray-400 text-white cursor-pointer rounded hover:bg-gray-500 transition">
              Back
            </button>
          )}
          {step < 3 ? (
            <button onClick={handleNext} className="px-4 py-2 font-medium bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 transition ml-auto">
              Next
            </button>
          ) : (
            <button onClick={handleRequestForRegister} className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 transition ml-auto">
              Request For Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;