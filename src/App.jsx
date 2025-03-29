import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import FindDocPage from "./pages/FindDocPage";
import DocDetails from "./pages/DocDetails";
import AppointmentPage from "./pages/AppointmentPage";

function App() {
  const location = useLocation(); // Get the current route

  // Hide Navbar on login & register pages
  const hideNavbarRoutes = ["/login", "/register"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/finddoc" element={<FindDocPage />} />
        <Route path="/doc-details/:id" element={<DocDetails />} />
        <Route path="/book-appointment/:id" element={<AppointmentPage />} />
      </Routes>
    </>
  );
}

export default App;
