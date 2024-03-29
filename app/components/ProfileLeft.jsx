"use client";
import "@/app/styles/style.css";

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

  const isUserAuthenticated = useSelector(
    (state) => state.isAuthenticate.isAuthenticated
  );
  const t = useTranslations("signup");
  let userData;

  if (isUserAuthenticated) {
    userData = useSelector((state) => state.isAuthenticate.user);
    // console.log(userData);
  }

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
      setPopup(false);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user");
    }
  };

  return (
    <div>
      <div className="profile-bg border h-[590px] border-red-300 bg-theme rounded justify-center overflow-hidden">
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
            }}
          />
        </div>

        <div className="user-details text-center items-center relative">
          <div className="block">
            <h1 className="text-2xl font-bold">{user.email}</h1>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <h1 className="text-2xl font-semibold">{user.phone}</h1>
          </div>
        </div>
        {/* <SocialMediaIcons /> */}

        {/* edit button */}
        <div>
          <Button
            endIcon={<Mode />}
            onClick={() => open(setPopup)}
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
          >
            {t("edit_profile")}
          </Button>
        </div>

        {/* logout functionallity */}
        <Button
          varient={"contained"}
          sx={{ background: "#dccde0", marginBlock: 2 }}
          onClick={() => open(setLogoutPopup)}
        >
          {t("logout")}
        </Button>

        <Modal
          open={logoutPopup}
          onClose={() => setLogoutPopup(false)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                onClick={() => setLogoutPopup(false)}
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

        <Modal open={popup} onClose={() => setPopup(false)}>
          <Box borderRadius={"10px"} p={2}>
            <div className="data">
              <SignUpForm
                isItSignup={false}
                t={t}
                UserData={userData}
                setPopup={setPopup}
                updateData={isUserAuthenticated ? updateData : ""}
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
