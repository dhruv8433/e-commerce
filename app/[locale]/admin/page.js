"use client";
import { adminLogin } from "@/app/services/adminLogin";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [admin, setAdmin] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await adminLogin(data);

      console.log("inside try");
      if (response.success) {
        toast.success(response.message);
        setAdmin(true);
      } else {
        toast.error(response.message);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      {admin ? (
        <>
          <div>
            <div className=" grid grid-cols-12 gap-24">
              <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
                Add Provider
              </div>
              <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
                Add Service
              </div>
              <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
                Users
              </div>
              <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
                Admin Benifits
              </div>
              <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded"></div>
              <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded"></div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Admin Login
          </h2>
          <form onSubmit={handleFormSubmit} method="POST">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
                value={data.password}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
              >
                Login
              </button>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      )}
    </div>
  );
};

export default page;

/** {data.loginSuccess ? ( // Conditional rendering based on login success
        <div>
          <div className=" grid grid-cols-12 gap-24">
            <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
              Add Provider
            </div>
            <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
              Add Service
            </div>
            <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
              Users
            </div>
            <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded">
              Admin Benifits
            </div>
            <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded"></div>
            <div className="border border-red-600 col-span-4 flex justify-center items-center h-44 rounded"></div>
          </div>
        </div>
      ) : ( */
