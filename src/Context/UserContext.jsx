import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = (props) => {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const value = { isUserLoggedin, setIsUserLoggedin };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
