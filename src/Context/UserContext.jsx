import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = (props) => {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const [userRole, setUserRole] = useState("user");
  // const [userRole, setUserRole] = useState("doctor");
  const value = { isUserLoggedin, setIsUserLoggedin, userRole, setUserRole };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
