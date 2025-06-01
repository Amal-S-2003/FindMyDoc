import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  User, Mail, Phone, MapPin, Hospital as HospitalIcon,
  Calendar, ClipboardList, Briefcase, Award,
  GraduationCap, Home,
} from 'lucide-react';
import { FaStar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const labelStyle = 'font-semibold text-gray-600 mr-1 capitalize';
const valueStyle = 'text-gray-800';
const sectionStyle = 'mb-6';
const listItemStyle = 'ml-5 list-disc text-gray-700';
const iconSize = 18;

const icons = {
  fullName: <User size={iconSize} className="text-red-500 mr-2" />,
  specializations: <Briefcase size={iconSize} className="text-red-500 mr-2" />,
  qualifications: <GraduationCap size={iconSize} className="text-red-500 mr-2" />,
  medicalRegNumber: <ClipboardList size={iconSize} className="text-red-500 mr-2" />,
  gender: <User size={iconSize} className="text-red-500 mr-2" />,
  dob: <Calendar size={iconSize} className="text-red-500 mr-2" />,
  address: <Home size={iconSize} className="text-red-500 mr-2" />,
  location: <MapPin size={iconSize} className="text-red-500 mr-2" />,
  hospital: <HospitalIcon size={iconSize} className="text-red-500 mr-2" />,
  phoneNumber: <Phone size={iconSize} className="text-red-500 mr-2" />,
  email: <Mail size={iconSize} className="text-red-500 mr-2" />,
  experiences: <Briefcase size={iconSize} className="text-red-500 mr-2" />,
  certificates: <Award size={iconSize} className="text-red-500 mr-2" />,
  awards: <Award size={iconSize} className="text-red-500 mr-2" />,
  availability: <Calendar size={iconSize} className="text-red-500 mr-2" />,
  consultationTime: <FaClock size={iconSize} className="text-red-500 mr-2" />,
  rating: <FaStar size={iconSize} className="text-yellow-500 mr-2" />,
  category: <Briefcase size={iconSize} className="text-red-500 mr-2" />,
  description: <ClipboardList size={iconSize} className="text-red-500 mr-2" />,
};

function DoctorDetails() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dummy Data
  const dummyDoctorData = {
    id: doctorId || 1,
    profilePic: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?ga=GA1.1.270275950.1719844196&semt=ais_items_boosted&w=740',
    fullName: 'Dr. John Doe',
    specializations: ['Cardiologist', 'Interventional Cardiology'],
    qualifications: ['MBBS', 'MD (Cardiology)', 'DM (Cardiology)'],
    medicalRegNumber: '1234567890',
    gender: 'Male',
    dob: '1975-05-15',
    address: 'Kochi Medical Trust Hospital, MG Road',
    location: 'Kochi, Kerala',
    hospital: 'Kochi Medical Trust Hospital',
    phoneNumber: '+91 9876543210',
    email: 'rajesh.kumar@example.com',
    experiences: [
      { place: 'Apollo Hospitals, Chennai', years: '2005 - 2010' },
      { place: 'Fortis Hospital, Bangalore', years: '2010 - 2015' },
    ],
    certificates: [
      { description: 'Advanced Cardiac Life Support (ACLS) Certification', file: null },
      { description: 'Fellowship in Interventional Cardiology', file: null },
    ],
    awards: [
      { description: 'Best Cardiologist Award - 2018', file: null },
      { description: 'Healthcare Excellence Award - 2022' },
    ],
    availability: {
      Monday: { start: '09:00', end: '17:00', notAvailable: false },
      Tuesday: { start: '09:00', end: '13:00', notAvailable: false },
      Wednesday: { start: '14:00', end: '17:00', notAvailable: false },
      Thursday: { start: '09:00', end: '17:00', notAvailable: false },
      Friday: { start: '09:00', end: '17:00', notAvailable: false },
      Saturday: { notAvailable: true },
      Sunday: { notAvailable: true },
    },
    consultationTime: '30 minutes',
    rating: 4.8,
    category: 'Cardiologist',
    description: 'Highly skilled cardiologist with extensive experience in interventional cardiology.',
  };

  useEffect(() => {
    setTimeout(() => {
      setDoctorData(dummyDoctorData);
      setLoading(false);
    }, 500);
  }, [doctorId]);

  if (loading) return <div className="text-center py-10">Loading doctor details...</div>;
  if (!doctorData) return <div className="text-center py-10 text-red-500">Doctor not found.</div>;

  return (
    <div className="px-4 py-6 md:px-10 md:py-10 bg-gray-100 min-h-screen">
      <motion.div
        className="bg-white p-6 md:p-10 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={doctorData.profilePic || '/no-profile.png'}
            alt="Doctor Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-2 border-red-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-2">{doctorData.fullName}</h2>
            <p className="text-gray-700">{doctorData.category}</p>
            <p className="flex items-center justify-center md:justify-start mt-1">
              {icons.rating} {doctorData.rating} / 5.0
            </p>
          </div>
        </div>

        {/* General Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'specializations',
            'qualifications',
            'medicalRegNumber',
            'gender',
            'dob',
            'email',
            'phoneNumber',
            'location',
            'hospital',
            'address',
            'consultationTime',
          ].map((key) => (
            <div key={key} className={sectionStyle}>
              <div className="flex items-center">
                {icons[key]}
                <span className={labelStyle}>{key.replace(/([A-Z])/g, ' $1')}:</span>
              </div>
              <div className="ml-7">
                {Array.isArray(doctorData[key]) ? (
                  <ul className="list-disc ml-4">
                    {doctorData[key].map((item, idx) => (
                      <li key={idx} className={valueStyle}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={valueStyle}>{doctorData[key]}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Experience, Certificates, Awards */}
        {['experiences', 'certificates', 'awards'].map((sectionKey) => (
          <div key={sectionKey} className={sectionStyle}>
            <div className="flex items-center mb-2">
              {icons[sectionKey]}
              <span className="text-lg font-semibold text-red-600 capitalize ml-1">
                {sectionKey}
              </span>
            </div>
            <ul className="ml-7 list-disc">
              {doctorData[sectionKey].map((item, idx) => (
                <li key={idx} className={valueStyle}>
                  {item.description || item.place} {item.years ? `(${item.years})` : ''}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Availability */}
        <div className={sectionStyle}>
          <div className="flex items-center mb-2">
            {icons.availability}
            <span className="text-lg font-semibold text-red-600">Availability</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ml-7">
            {Object.entries(doctorData.availability).map(([day, time]) => (
              <div key={day} className="bg-gray-50 rounded-md p-2 border">
                <span className="block font-medium text-gray-700">{day}</span>
                <span className="text-sm text-gray-600">
                  {time.notAvailable ? 'Not Available' : `${time.start} - ${time.end}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className={sectionStyle}>
          <div className="flex items-center mb-2">
            {icons.description}
            <span className="text-lg font-semibold text-red-600">Description</span>
          </div>
          <p className="ml-7 text-gray-800">{doctorData.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-end gap-3">
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-md text-sm"
            onClick={() => navigate(`/book-appointment/${doctorData.id}`)}
          >
            Book Appointment
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-5 rounded-md text-sm"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DoctorDetails;
