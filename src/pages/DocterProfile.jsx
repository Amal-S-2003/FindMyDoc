import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Hospital,
  Calendar,
  ClipboardList,
  Briefcase,
  Award,
  GraduationCap,
  Home
} from 'lucide-react';
// REMOVE THIS LINE:
// import { Clock } from '@mui/x-date-pickers/TimeClock/Clock';

function DoctorProfile() {
  const { doctorId } = useParams();
  console.log(doctorId, "doctorId");

  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data for demonstration
  const dummyDoctorData = {
    id: doctorId,
    profilePic: '/no-profile.png',
    fullName: 'Dr. Rajesh Kumar',
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
      Saturday: { start: '', end: '', notAvailable: true },
      Sunday: { start: '', end: '', notAvailable: true },
    },
    consultationTime: '30 minutes',
  };

  useEffect(() => {
    setTimeout(() => {
      setDoctorData(dummyDoctorData);
      setLoading(false);
    }, 500);
  }, [doctorId]);

  if (loading) {
    return <div>Loading doctor profile...</div>;
  }

  if (error) {
    return <div>Error loading doctor profile: {error.message}</div>;
  }

  if (!doctorData) {
    return <div>Doctor profile not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="px-4 py-5 sm:px-6 bg-gray-100">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={doctorData.profilePic}
                alt={doctorData.fullName}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{doctorData.fullName}</h3>
              <p className="text-sm text-gray-500">{doctorData.specializations.join(', ')}</p>
              <p className="text-sm text-gray-500">{doctorData.hospital}</p>
              <div className="flex space-x-2 mt-1">
                {doctorData.location && (
                  <span className="flex items-center text-xs text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {doctorData.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ClipboardList className="h-5 w-5 inline-block mr-2 align-middle" />
                Medical Registration No.
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {doctorData.medicalRegNumber}
              </dd>
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <User className="h-5 w-5 inline-block mr-2 align-middle" />
                Gender
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {doctorData.gender}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Calendar className="h-5 w-5 inline-block mr-2 align-middle" />
                Date of Birth
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {new Date(doctorData.dob).toLocaleDateString()}
              </dd>
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Home className="h-5 w-5 inline-block mr-2 align-middle" />
                Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {doctorData.address}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Mail className="h-5 w-5 inline-block mr-2 align-middle" />
                Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {doctorData.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Phone className="h-5 w-5 inline-block mr-2 align-middle" />
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {doctorData.phoneNumber}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <GraduationCap className="h-5 w-5 inline-block mr-2 align-middle" />
                Qualifications
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5">
                  {doctorData.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Briefcase className="h-5 w-5 inline-block mr-2 align-middle" />
                Experience
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5">
                  {doctorData.experiences.map((experience, index) => (
                    <li key={index}>
                      {experience.place} ({experience.years})
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Award className="h-5 w-5 inline-block mr-2 align-middle" />
                Certificates
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5">
                  {doctorData.certificates.map((certificate, index) => (
                    <li key={index}>{certificate.description}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Award className="h-5 w-5 inline-block mr-2 align-middle" />
                Awards
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5">
                  {doctorData.awards.map((award, index) => (
                    <li key={index}>{award.description}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Calendar className="h-5 w-5 inline-block mr-2 align-middle" />
                Availability
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5">
                  {Object.entries(doctorData.availability).map(([day, times]) => (
                    <li key={day}>
                      {day}:{' '}
                      {times.notAvailable
                        ? 'Not Available'
                        : `${times.start} - ${times.end}`}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {/* You can use a simple text or a different icon here if you don't need the MUI Clock */}
                <span className="h-5 w-5 inline-block mr-2 align-middle">⏱️</span>
                Consultation Time
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {doctorData.consultationTime}
              </dd>
            </div>
          </dl>
        </div>

        {/* Action Buttons (Optional) */}
        <div className="px-4 py-4 bg-gray-100 text-right sm:px-6">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => alert('Book Appointment functionality')}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;