import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext.jsx";
import { AppointmentContextProvider } from "./Context/AppointmentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AppointmentContextProvider>

        <App />
        </AppointmentContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
