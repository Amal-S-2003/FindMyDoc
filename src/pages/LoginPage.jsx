import React from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 px-6 lg:px-20 py-10">
      {/* Left Section - Logo & Intro */}
      <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
        <img src="./ladyDoc.png" alt="ladyDoc" className="w-3/4 max-w-xs" />
        <div className="flex items-center justify-center space-x-1 mt-4">
          <h1 className="text-2xl font-bold font-mono">
            <span className="text-red-600 text-4xl">F</span>ind
          </h1>
          <h1 className="text-2xl font-bold font-mono">
            <span className="text-red-600 text-4xl">M</span>y
          </h1>
          <h1 className="text-2xl font-bold font-mono">
            <span className="text-red-600 text-4xl">D</span>oc
          </h1>
        </div>
        <p className="font-medium text-gray-500 mt-2">Best Doctors Are Here...</p>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4">
          <span className="text-red-500">L</span>ogin <span className="text-red-500">H</span>ere
        </h1>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="bg-gray-100 py-3 px-5 rounded-full flex items-center gap-3">
            <MdEmail />
            <input type="email" placeholder="Email" className="bg-transparent w-full outline-none font-semibold" />
          </div>
          <div className="bg-gray-100 py-3 px-5 rounded-full flex items-center gap-3">
            <FaLock />
            <input type="password" placeholder="Password" className="bg-transparent w-full outline-none font-semibold" />
          </div>
        </div>

        {/* OR Separator */}
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="border-b-2 border-red-500 w-16"></span>
          <p className="font-medium text-red-500">OR</p>
          <span className="border-b-2 border-red-500 w-16"></span>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="bg-green-500 font-medium w-full py-3 rounded-full text-white flex justify-center items-center gap-2">
            <FaGoogle className="text-white" />
            <p>Sign in with Google</p>
          </button>
          <button className="bg-blue-500 font-medium w-full py-3 rounded-full text-white flex justify-center items-center gap-2">
            <MdFacebook className="text-white text-2xl" />
            <p>Sign in with Facebook</p>
          </button>
        </div>

        {/* Register Redirect */}
        <p className="mt-4 text-center">
          New here?{" "}
          <span className="text-red-500 underline font-semibold cursor-pointer" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
