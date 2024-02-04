"use client";

import Lottie from "lottie-react";
import React, { useState } from "react";
import DeleteAccountAnimation from "@/app/json/animations/delete.json";
import { Box, Button, Divider, Modal } from "@mui/material";
import { close, open } from "../config/config";
import { DeleteAccountService } from "../services/deleteAccountService";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { LOGOUT_SUCCESS } from "../reducer/isLoggedIn";
import { useTranslations } from "next-intl";

const DeleteAccount = () => {
  const [popup, setPopup] = useState(false);
  const token = useSelector((state) => state.isAuthenticate.user.token);
  const dispatch = useDispatch();

  async function deleteAccountFun() {
    const response = await DeleteAccountService(token);
    console.log(response);
    dispatch({ type: LOGOUT_SUCCESS });
    toast.success(response.message);
    window.location.assign("/");
  }

  const t = useTranslations("profile");
  return (
    <div className="h-[500px] flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <Lottie
          animationData={DeleteAccountAnimation}
          style={{ height: 200 }}
        />
      </div>
      <div>
        <h1>{t("conform_delete")}</h1>
        <div className="mt-2">
          {/* <Button size="small" variant="outlined"  sx={{ marginInline: "10px"}}>Cancle</Button> */}
          <Button
            size="small"
            variant="contained"
            sx={{ marginInline: "10px" }}
            onClick={() => open(setPopup)}
          >
            {t("delete_account")}
          </Button>
        </div>
      </div>

      <Modal open={popup}>
        <Box
          borderRadius={"10px"}
          p={1}
          width={300}
          bgcolor={"white"}
          // height={400}
        >
          <div className="flex justify-center">
            <h1>{t("beware")}</h1>
          </div>
          <Divider />
          <div className="msg flex justify-center flex-col p-2">
            <p>{t("delete_msg")}</p>
            <div className="btns mt-4">
              <Button
                size="small"
                variant="outlined"
                sx={{ marginInline: "10px" }}
                onClick={() => setPopup(false)}
              >
                {t("cancle")}
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ marginInline: "10px", bgcolor: "red" }}
                onClick={() => deleteAccountFun()}
              >
                {t("delete_account")}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteAccount;
