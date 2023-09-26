import React from "react";
import CustomButton from "../common/CustomButton";
import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="mt-20 w-full py-4 ">
      <div className="border border-red-300 bg-theme rounded">
        <div className="flex">
          <div className="user-image h-56 w-56 my-4 mx-4">
            <Image
              src={
                "https://i.pinimg.com/564x/0a/15/19/0a151948d914e58aaad0202e40d07702.jpg"
              }
              width={"200"}
              height={"200"}
              alt="user-picture"
              style={{
                borderRadius: "100px",
                maxHeight: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="user-details flex items-center">
            <div className="block">
              <h1 className="text-3xl font-bold">Alex</h1>
              <h1 className="text-2xl font-bold">alex@gmail.com</h1>
              <h1 className="text-2xl font-semibold">+1 1231245994</h1>
              <h1 className="text-2xl font-semibold">customer</h1>
            </div>
          </div>
          <div className="edit ml-auto m-1">
            <CustomButton children={"Edit"} varient={"outlined"} />
          </div>
        </div>
        {/* user navigation links that contain common user profile but different user route */}
      </div>
    </div>
  );
};

export default UserProfile;
