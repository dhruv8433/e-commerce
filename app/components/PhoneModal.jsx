"use client";
import { IconButton, Modal } from "@mui/material";
import React, { useState } from "react";
import { close, open } from "../config/config";
import LoginIcon from "@mui/icons-material/Login";
import "@/app/styles/style.css";
import { CloseRounded } from "@mui/icons-material";
import CustomButton from "../common/CustomButton";

// it is modal that only open in responsive device so insted of seeting login and sign up in navigatin we use one icon and on that click we got 2 option for login and signup
const PhoneModal = ({ signup, login }) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      <IconButton onClick={() => open(setLoginModal)}>
        <LoginIcon />
      </IconButton>
      {/* login & signup modal */}
      <Modal
        className="flex justify-center items-center"
        open={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="bg-white w-48 h-48 rounded ">
          {/* select method to login or signup */}
          <div className="flex justify-between items-center px-1">
            <h1>Select Method</h1>
            <IconButton onClick={() => setLoginModal(false)}>
              <CloseRounded />
            </IconButton>
          </div>
          <hr />
          <div className="p-4 grid gap-2 mt-2">
            {/* custom button component */}
            <CustomButton
              children={signup}
              varient={"contained"}
              customClass="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full focus:ring focus:ring-blue-200"
            />
            <CustomButton
              children={login}
              varient={"contained"}
              customClass="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-full focus:ring focus:ring-gray-200"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PhoneModal;
