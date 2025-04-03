import React from "react";
import { FaBell, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const notifications = [
  { id: 1, message: "Your appointment has been confirmed!", type: "success", time: "Just now" },
  { id: 2, message: "New doctor added to your preferred list!", type: "info", time: "2 hours ago" },
  { id: 3, message: "Your appointment is scheduled for tomorrow at 10 AM.", type: "reminder", time: "1 day ago" },
  { id: 4, message: "Your prescription is ready for pickup.", type: "success", time: "3 days ago" },
  { id: 5, message: "Reminder: Follow-up consultation in 3 days.", type: "reminder", time: "1 week ago" },
];

const getNotificationIcon = (type) => {
  switch (type) {
    case "success":
      return <FaCheckCircle className="text-green-500" />;
    case "info":
      return <FaBell className="text-blue-500" />;
    case "reminder":
      return <FaExclamationTriangle className="text-yellow-500" />;
    default:
      return <FaBell className="text-gray-500" />;
  }
};

function Notifications() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 flex items-center gap-2"
      >
        <FaBell className="text-red-500" /> Notifications
      </motion.h2>

      {/* Notification List */}
      <div className="mt-6 w-full max-w-2xl">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: notification.id * 0.1 }}
            className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4 mb-3"
          >
            {/* Icon */}
            <div className="text-2xl">{getNotificationIcon(notification.type)}</div>

            {/* Message */}
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">{notification.message}</p>
              <p className="text-gray-500 text-sm">{notification.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
