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
import AppointmentSuccess from "./pages/AppointmentSuccess";
import Notifications from "./pages/Notifications";
import DoctorLogin from "./pages/DocterLogin";
import DocterRegister from "./pages/DocterRegister";
import DocterProfile from "./pages/DocterProfile";

function App() {
  const location = useLocation(); // Get the current route

  // Hide Navbar on login & register pages
  const hideNavbarRoutes = ["/login", "/register",'/docter/register'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/finddoc" element={<FindDocPage />} />
        <Route path="/notifications/:id" element={<Notifications />} />
        <Route path="/doc-details/:id" element={<DocDetails />} />
        <Route path="/book-appointment/:id" element={<AppointmentPage />} />
        <Route path="/appointment-success/:id" element={<AppointmentSuccess />} />


        <Route path="/docter">
        <Route path="login" element={<DoctorLogin/>}/>
        <Route path="register" element={<DocterRegister/>}/>
        <Route path="profile/:doctorId" element={<DocterProfile/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
