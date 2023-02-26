import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import BackgroundSample from "./BackgroundSample";
import FontSample from "./FontSample";

const BackgroundTheme = ({
  setBgLinkToShow,
  bgLinkToShow,
  fontToShow,
  setFontToShow,
}) => {
  const [navVis, setNavVis] = useState(false);
  const backgroundList = [
    "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg",
    "https://images.pexels.com/photos/7919/pexels-photo.jpg",
    "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg",
    "https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg",
    "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
  ];
  // ?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=50&w=60
  return (
    <nav className="flex justify-end pt-6 pl-4 pr-6 relative">
      <div className="relative">
        <BiMenuAltRight
          className="text-[25px] justify-end ml-auto cursor-pointer"
          onClick={() => setNavVis(!navVis)}
        />
        {navVis && (
          <div className="bg-[rgba(225,225,225,0.1)] px-6 py-10 rounded-lg w-[300px] mt-2 absolute h-[400px] top-6 right-0">
            {/* All Background Row */}
            <div className="flex gap-2 flex-wrap mb-4">
              <BackgroundSample
                setBgLinkToShow={setBgLinkToShow}
                bgLinkToShow={bgLinkToShow}
                bgLink={backgroundList[0]}
              />
              <BackgroundSample
                setBgLinkToShow={setBgLinkToShow}
                bgLinkToShow={bgLinkToShow}
                bgLink={backgroundList[1]}
              />
              <BackgroundSample
                setBgLinkToShow={setBgLinkToShow}
                bgLinkToShow={bgLinkToShow}
                bgLink={backgroundList[2]}
              />
              <BackgroundSample
                setBgLinkToShow={setBgLinkToShow}
                bgLinkToShow={bgLinkToShow}
                bgLink={backgroundList[3]}
              />
              <BackgroundSample
                setBgLinkToShow={setBgLinkToShow}
                bgLinkToShow={bgLinkToShow}
                bgLink={backgroundList[4]}
              />
              <BackgroundSample
                setBgLinkToShow={setBgLinkToShow}
                bgLinkToShow={bgLinkToShow}
                bgLink={backgroundList[5]}
              />
            </div>
            {/* All Fonts sample */}
            <div className="flex gap-2 flex-wrap">
              <FontSample
                text={"AT"}
                fontName={"font-amantic"}
                setFontToShow={setFontToShow}
                fontToShow={fontToShow}
              />
              <FontSample
                text={"AE"}
                fontName={"font-apple"}
                setFontToShow={setFontToShow}
                fontToShow={fontToShow}
              />
              <FontSample
                text={"NM"}
                fontName={"font-nanum"}
                setFontToShow={setFontToShow}
                fontToShow={fontToShow}
              />
              <FontSample
                text={"PS"}
                fontName={"font-poppins"}
                setFontToShow={setFontToShow}
                fontToShow={fontToShow}
              />
              <FontSample
                text={"YL"}
                fontName={"font-yellowtail"}
                setFontToShow={setFontToShow}
                fontToShow={fontToShow}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BackgroundTheme;

// <h3
// onClick={() => setFontToShow("font-amantic")}
// className="cursor-pointer font-amantic text-black bg-white w-[50px] h-[50px] rounded-full text-center text-[32px] flex items-baseline justify-center"
// >
// AT
// </h3>
// <h3
// onClick={() => setFontToShow("font-apple")}
// className="cursor-pointer font-apple text-black bg-white w-[50px] h-[50px] rounded-full text-center text-[24px] flex items-center justify-center"
// >
// AE
// </h3>
// <h3
// onClick={() => setFontToShow("font-nanum")}
// className="cursor-pointer font-nanum text-black bg-white w-[50px] h-[50px] rounded-full text-center text-[37px] flex items-center justify-center"
// >
// NM
// </h3>
// <h3
// onClick={() => setFontToShow("font-poppins")}
// className="cursor-pointer font-poppins text-black bg-white w-[50px] h-[50px] rounded-full text-center text-[34px] flex items-center justify-center"
// >
// PS
// </h3>
// <h3
// onClick={() => setFontToShow("font-yellowtail")}
// className="cursor-pointer font-yellowtail text-black bg-white w-[50px] h-[50px] rounded-full text-center text-[26px] flex items-center justify-center"
// >
// NM
// </h3>
