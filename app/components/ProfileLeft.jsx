import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import CustomButton from "../common/CustomButton";
import { Button } from "@mui/material";
import Image from "next/image";

const ProfileLeft = ({ user, logout }) => {
  return (
    <div>
      <div className="border border-red-300 bg-theme rounded justify-center">
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
              }}
            />
          </div>
          <div className="user-details text-center items-center">
            <div className="block">
              <h1 className="text-3xl font-bold">{user.user}</h1>
              <h1 className="text-2xl font-bold">{user.email}</h1>
              <h1 className="text-2xl font-semibold">{user.mobile}</h1>
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
          />
        </div>

        {/* logout functionallity */}
        <Button varient={"contained"} onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileLeft;
