"use client";

import React, { useState } from "react";

const NavMenu = () => {
  const [active, setActive] = useState("");

  return (
    <div className="text-white" id="nav-menu">
      <div
        className={`nav-menu-item flex items-center rounded-full mb-[16px] ${
          active === "home" && "active"
        }`}
        onMouseOver={() => setActive("home")}
        onMouseLeave={() => setActive("")}
      >
        <img src="assets/images/Home_light.png" />
        <div className="pl-[40px] ml-[-30px] pr-[20px] nav-menu-title hidden rounded-e-full">
          Overview
        </div>
      </div>
      <div
        className={`nav-menu-item flex items-center rounded-full mb-[16px] ${
          active === "info" && "active"
        }`}
        onMouseOver={() => setActive("info")}
        onMouseLeave={() => setActive("")}
      >
        <img src="assets/images/info_light.png" />
        <div className="pl-[40px] ml-[-30px] pr-[20px] nav-menu-title hidden rounded-e-full">
          Info
        </div>
      </div>
      <div
        className={`nav-menu-item flex items-center rounded-full mb-[16px] ${
          active === "Check" && "active"
        }`}
        onMouseOver={() => setActive("Check")}
        onMouseLeave={() => setActive("")}
      >
        <img src="assets/images/Check_ring_light.png" />
        <div className="pl-[40px] ml-[-30px] pr-[20px] nav-menu-title hidden rounded-e-full">
          Check
        </div>
      </div>
      <div
        className={`nav-menu-item flex items-center rounded-full mb-[16px] ${
          active === "signin" && "active"
        }`}
        onMouseOver={() => setActive("signin")}
        onMouseLeave={() => setActive("")}
      >
        <img src="assets/images/Sign_in_circle_light.png" />
        <div className="pl-[40px] ml-[-30px] pr-[20px] nav-menu-title hidden rounded-e-full">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
