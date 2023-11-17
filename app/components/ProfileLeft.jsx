"use client";

import React, { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Box, Button, Divider, IconButton, Modal } from "@mui/material";
import Image from "next/image";
import { close, open } from "../config/config";
import SignUpForm from "./SignUpForm";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { UpdateUserService } from "../services/updateUserService";
import { loginSuccess } from "../action/action";
import { Mode } from "@mui/icons-material";

const ProfileLeft = ({ user, logout }) => {
  const [popup, setPopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);

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
      <div className="border h-[590px] border-red-300 bg-theme rounded justify-center overflow-hidden">
        <div className="user-image h-56 w-56 mx-auto text-center z-10">
          <Image
            src={
              "https://i.pinimg.com/originals/a7/77/26/a777268f7701fbf12bdc2ed4175758d5.png"
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
              zIndex: 10,
              position: "relative",
            }}
          />
        </div>

        <div
          className=" h-96 -mt-[376px] rounded-full rotate-90 w-full"
          style={{ background: "#f328f3" }}
        ></div>
        <div className="user-details text-center items-center relative">
          <div className="block">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <h1 className="text-2xl font-bold">{user.email}</h1>
            <h1 className="text-2xl font-semibold">{user.phone}</h1>
          </div>
        </div>
        <SocialMediaIcons />

        {/* edit icon */}
        <div className="-mt-[390px] absolute ml-80">
          <IconButton
            className="border border-white"
            onClick={() => open(setPopup)}
          >
            <Mode color="white" sx={{ color: "white" }} />
          </IconButton>
        </div>

        {/* logout functionallity */}
        <Button varient={"contained"} onClick={() => open(setLogoutPopup)}>
          {t("logout")}
        </Button>

        <Modal open={logoutPopup} onClose={() => close(setLogoutPopup)}>
          <Box
            bgcolor={"white"}
            width={280}
            height={140}
            borderRadius={"10px"}
            p={2}
          >
            <h1>{t("logout_confirm")}</h1>
            <Divider />
            <div className="mt-2">
              <p>{t("logout_msg")}</p>
            </div>
            <div className="flex mt-2 items-end text-end justify-end">
              <Button
                className=""
                size="small"
                sx={{ marginInline: 1 }}
                variant="outlined"
                onClick={() => close(setLogoutPopup)}
              >
                {t("cancle")}
              </Button>
              <Button
                className=""
                size="small"
                sx={{
                  marginInline: 1,
                  background: "red",
                  "&:hover": {
                    background: "red",
                  },
                }}
                variant="contained"
                onClick={() => logout()}
              >
                {t("logout")}
              </Button>
            </div>
          </Box>
        </Modal>

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
      </div>
    </div>
  );
};

export default ProfileLeft;
