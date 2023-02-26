import React from "react";

const FontSample = ({ text, setFontToShow, fontName, fontToShow }) => {
  return (
    <h3
      onClick={() => setFontToShow(fontName)}
      className={`${
        fontToShow === fontName ? "border-[4px] border-black" : null
      } cursor-pointer font-amantic text-black bg-white w-[50px] h-[50px] rounded-full text-center text-[32px] flex items-baseline justify-center`}
    >
      {text}
    </h3>
  );
};

export default FontSample;
