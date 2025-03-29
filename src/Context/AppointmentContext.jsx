import dayjs from "dayjs";
import { createContext, useState } from "react";

export const AppointmentContext = createContext();
export const AppointmentContextProvider = (props) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const handleAppointment = () => {
    console.log("Selected Date:", selectedDate.format("YYYY-MM-DD"));
    console.log("Selected Time:", selectedTime.format("HH:mm"));
  };
  const value = {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    handleAppointment,
  };
  return (
    <AppointmentContext.Provider value={value}>
      {props.children}
    </AppointmentContext.Provider>
  );
};
