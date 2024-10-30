import React from "react";
import profileImage from "../assets/profile.png";
function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-3xl text-slate-900 font-bold">Knowledge Cafe</h1>
        <img src={profileImage} alt="" />
      </div>
      <hr />
    </>
  );
}

export default Navbar;
