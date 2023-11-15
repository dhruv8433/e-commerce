"use client";

import React, { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import CustomButton from "../common/CustomButton";
import { Box, Button, Modal } from "@mui/material";
import Image from "next/image";
import { close, open } from "../config/config";
import SignUpForm from "./SignUpForm";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { UpdateUserService } from "../services/updateUserService";
import { loginSuccess } from "../action/action";

const ProfileLeft = ({ user, logout }) => {
  const [popup, setPopup] = useState(false);

  const t = useTranslations("signup");
  const userData = useSelector((state) => state.isAuthenticate.user);
  console.log(userData);

  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState({
    name: userData.name,
    address: userData.address,
  });

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      // required data to update a particular user
      const response = await UpdateUserService(
        updateData.name,
        updateData.address,
        userData.token
      );

      console.log(response);
      toast.success(response.message);
      close(setPopup);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user");
    }
  };

  return (
    <div>
      <div className="border h-[590px] border-red-300 bg-theme rounded justify-center">
        <div>
          <div className="user-image h-56 w-56 mx-auto text-center">
            <Image
              src={
                "https://i.pinimg.com/736x/95/14/a2/9514a2106bdf506dc2ed2047ae4ba908.jpg"
              }
              width={"200"}
              height={"200"}
              alt="user-picture"
              style={{
                borderRadius: "120px",
                maxHeight: "100%",
                width: "100%",
                marginBlock: 20,
                padding: 10,
              }}
            />
          </div>
          <div className="user-details text-center items-center">
            <div className="block">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <h1 className="text-2xl font-bold">{user.email}</h1>
              <h1 className="text-2xl font-semibold">{user.phone}</h1>
            </div>
          </div>
        </div>

        <SocialMediaIcons />

        <div className="edit ml-auto m-1 px-4">
          <CustomButton
            children={"Edit profile"}
            varient={"outlined"}
            size={"small"}
            customClass={"text-white w-full"}
            customFunction={() => open(setPopup)}
          />
        </div>

        <Modal open={popup} onClose={() => close(setPopup)}>
          <Box borderRadius={"10px"} p={2}>
            <div className="data">
              <SignUpForm
                isItSignup={false}
                t={t}
                UserData={userData}
                setPopup={setPopup}
                updateData={updateData}
                setUpdateData={setUpdateData}
                updateUser={updateUser}
              />
            </div>
          </Box>
        </Modal>

        {/* logout functionallity */}
        <Button varient={"contained"} onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileLeft;
