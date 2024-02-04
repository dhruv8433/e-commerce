"use client";

// this is reusable component that used in signup as well update profile
import Link from "next/link";
import React from "react";
import { close } from "../config/config";

const SignUpForm = ({
  handleSubmit,
  handleChange,
  t,
  isItSignup,
  UserData,
  updateData,
  setUpdateData,
  updateUser,
  setPopup,
}) => {
  return (
    <>
      <div
        className={`${
          isItSignup ? "min-h-screen" : "h-auto"
        } flex items-center justify-center  ${isItSignup ? "bg-gray-100" : ""} `}
      >
        <div className="bg-white p-8 rounded shadow-md w-96">
          {isItSignup ? (
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t("signup")}
            </h2>
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t("update_profile")}
            </h2>
          )}

          <form onSubmit={isItSignup ? handleSubmit : updateUser} method="POST">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                {t("email")}
              </label>
              {isItSignup ? (
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your email"
                  value={UserData.email}
                  disabled
                  style={{ color: "gray" }}
                />
              )}
            </div>
            {isItSignup ? (
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium"
                >
                  {t("password")}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your password"
                  required
                  onChange={handleChange}
                />
              </div>
            ) : (
              ""
            )}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium"
              >
                {t("phone")}
              </label>
              {isItSignup ? (
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  onKeyPress={(e) => {
                    // Allow only numbers: 0-9 (keycodes 48-57)
                    const keyCode = e.which || e.keyCode;
                    if (keyCode < 48 || keyCode > 57) {
                      e.preventDefault();
                    }
                  }}
                  required
                />
              ) : (
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your phone number"
                  value={UserData.phone}
                  disabled
                  style={{ color: "gray" }}
                />
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                {t("name")}
              </label>
              {isItSignup ? (
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your full name"
                  value={updateData.name}
                  onChange={(e) =>
                    setUpdateData({
                      ...updateData,
                      name: e.target.value,
                    })
                  }
                />
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium"
              >
                {t("address")}
              </label>
              {isItSignup ? (
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your address"
                  onChange={handleChange}
                  required
                ></textarea>
              ) : (
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter your address"
                  onChange={(e) =>
                    setUpdateData({
                      ...updateData,
                      address: e.target.value,
                    })
                  }
                  value={updateData.address}
                ></textarea>
              )}
            </div>
            <div className="mb-4">
              {isItSignup ? (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
                >
                  {t("signup")}
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
                  >
                    {t("update")}
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200 ml-2"
                    onClick={() => setPopup(false)}
                  >
                    {t("cancle")}
                  </button>
                </>
              )}
            </div>
          </form>
          {isItSignup ? (
            <div className="w-full flex flex-col justify-center items-center">
              <h1>{t("alredy_account")}</h1>
              <Link href={"/login"} className="text-blue-500 hover:underline">
                {t("login")}
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
