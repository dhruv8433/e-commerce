import React from "react";

const ProfilePageName = ({ name }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{name}</h1>
      <hr />
    </div>
  );
};

export default ProfilePageName;
