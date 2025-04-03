import React, { useState } from "react";
import { FaUserEdit, FaCheckCircle } from "react-icons/fa";

function Profile() {
  const [isCompleteProfileOpen, setIsCompleteProfileOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "",
    age: "",
    sex: "",
    dateOfBirth: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCompleteProfile = () => {
    setIsCompleteProfileOpen(!isCompleteProfileOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Profile Header */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
        {/* Profile Picture (Initials) */}
        <div className="w-20 h-20 bg-red-500 text-white text-3xl font-bold flex items-center justify-center rounded-full mx-auto">
          {formData.username.charAt(0).toUpperCase()}
        </div>

        {/* Basic Details */}
        <h2 className="text-xl font-bold mt-3">{formData.username}</h2>
        <p className="text-gray-600">{formData.email}</p>
        <p className="text-gray-600">{formData.phone}</p>

        {/* Complete Profile Button */}
        <button
          onClick={toggleCompleteProfile}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
        >
          <FaUserEdit /> Complete Profile
        </button>
      </div>

      {/* Complete Profile Form */}
      {isCompleteProfileOpen && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white mt-6 p-6 rounded-lg shadow-md"
        >
          <div className="grid gap-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              name="emergencyContact"
              placeholder="Emergency Contact Number"
              value={formData.emergencyContact}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition w-full"
          >
            <FaCheckCircle /> Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;
