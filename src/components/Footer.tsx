import React from "react";

const Footer = () => {
  return (
    <div className="mx-[48px] md:mx-[236px] pb-2 md:flex md:items-center md:justify-between text-[rgba(255,255,255,0.7)] font-[600] text-[14px] md:text-[18px]">
      <div className="hidden md:block">
        Copyright 2023 rendro. All Rights Reserved
      </div>
      <div>
        <div className="text-center md:text-left mb-[16px] md:mb-[8px]">
          Rendro@info.com
        </div>
        <div className="my-2 flex items-center justify-between md:justify-start">
          <img
            src="assets/images/youtube.png"
            className="md:mr-[16px] w-[16px] md:w-[25px]"
          />
          <img
            src="assets/images/discord.png"
            className="md:mr-[16px] w-[16px] md:w-[25px]"
          />
          <img
            src="assets/images/instagram.png"
            className="md:mr-[16px] w-[16px] md:w-[25px]"
          />
          <img
            src="assets/images/linkedin.png"
            className="md:mr-[16px] w-[16px] md:w-[25px]"
          />
          <img src="assets/images/twitter.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
