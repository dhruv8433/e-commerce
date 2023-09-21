"use client";
import { IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import { close, open } from "../config/config";
import LoginIcon from "@mui/icons-material/Login";
import "@/app/styles/style.css";
import { CloseRounded } from "@mui/icons-material";

const PhoneModal = ({ signup, login }) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      <IconButton onClick={() => open(setLoginModal)}>
        <LoginIcon />
      </IconButton>
      <Modal
        className="flex justify-center items-center"
        open={loginModal}
        onClose={() => close(setLoginModal)}
      >
        <div className="bg-white w-48 h-48 rounded ">
          <div className="flex justify-between items-center px-1">
            <h1>Select Method</h1>
            <IconButton onClick={() => close(setLoginModal)}>
              <CloseRounded />
            </IconButton>
          </div>
          <hr />
          <div className="p-4 grid gap-2 mt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200">
              {signup}
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-full focus:ring focus:ring-gray-200">
              {login}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PhoneModal;
