import React from "react";

const BackgroundSample = ({ bgLink, bgLinkToShow, setBgLinkToShow }) => {
  return (
    <img
      src={bgLink + "?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=50&w=60"}
      alt="background sample"
      className={
        bgLinkToShow === bgLink
          ? "border-[3px] border-white cursor-pointer h-[50px] w-[50px] rounded-full"
          : "cursor-pointer h-[50px] w-[50px] rounded-full"
      }
      onClick={() => setBgLinkToShow(bgLink)}
    />
  );
};

export default BackgroundSample;
