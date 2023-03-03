import { useState } from "react";
import PaperHand from "./images/PaperHand.svg";
import RockHand from "./images/RockHand.svg";
import ScissorHand from "./images/ScissorHand.svg";

function App() {
  const [userSelection, setUserSlection] = useState("p");
  const [compSelection, setCompSelection] = useState("p");
  const [gameHistory, setGameHistory] = useState([]);
  const [winner, setWinner] = useState("");

  // const situations = [
  //   ["s", "s", null],
  //   ["s", "r", "r"],
  //   ["r", "s", "r"],
  //   ["p", "r", "p"],
  //   ["r", "p", "p"],
  //   ["p", "s", "s"],
  //   ["s", "p", "s"],
  //   ["p", "p", null],
  //   ["r", "r", null],
  // ];

  const slectionToShow = (val) => {
    if (val === "p") {
      return <img src={PaperHand} alt="Paper Hand" width={120} />;
    } else if (val === "s") {
      return <img src={ScissorHand} width={120} alt="Scissor hand" />;
    } else if (val === "r") {
      return <img src={RockHand} alt="Rock Hand" width={120} />;
    }
  };

  const genCompSelection = () => {
    const samples = ["r", "p", "s"];
    const ans = samples[Math.floor(Math.random() * 3)];
    setCompSelection(ans);
    return ans;
  };

  function genWinner(userVal) {
    setUserSlection(userVal);
    const localComp = genCompSelection();
    if (localComp === "s" && userVal === "s") {
      setWinner("Tie");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "Tie",
        },
      ]);
    }
    if (localComp === "s" && userVal === "r") {
      setWinner("User");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "User",
        },
      ]);
    }
    if (localComp === "r" && userVal === "s") {
      setWinner("Computer");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "Computer",
        },
      ]);
    }
    if (localComp === "p" && userVal === "r") {
      setWinner("Computer");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "Computer",
        },
      ]);
    }
    if (localComp === "r" && userVal === "p") {
      setWinner("User");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "User",
        },
      ]);
    }
    if (localComp === "p" && userVal === "s") {
      setWinner("User");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "User",
        },
      ]);
    }
    if (localComp === "s" && userVal === "p") {
      setWinner("Computer");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "Computer",
        },
      ]);
    }
    if (localComp === "p" && userVal === "p") {
      setWinner("Tie");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "Tie",
        },
      ]);
    }
    if (localComp === "r" && userVal === "r") {
      setWinner("Tie");
      setGameHistory([
        ...gameHistory,
        {
          comp: slectionToShow(localComp),
          user: slectionToShow(userVal),
          winner: "Tie",
        },
      ]);
    }
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between relative">
        <div className="ml-6 pt-6">
          <h2 className="text-center font-semibold">Selection your option</h2>
          <div className="flex gap-8">
            <img
              width={40}
              src={ScissorHand}
              alt="Scissor Hand"
              onClick={() => genWinner("s")}
              className={
                userSelection === "s" &&
                gameHistory.length !== 0 &&
                "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
              }
            />

            <img
              width={50}
              src={RockHand}
              alt="Rock Hand"
              onClick={() => genWinner("r")}
              className={
                userSelection === "r" &&
                gameHistory.length !== 0 &&
                "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
              }
            />
            <img
              width={50}
              src={PaperHand}
              alt="Paper Hand"
              onClick={() => genWinner("p")}
              className={
                userSelection === "p" &&
                gameHistory.length !== 0 &&
                "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
              }
            />
          </div>
        </div>
        <div className="border-black border-2 w-fit absolute top-0 right-0 p-4 max-h-[21vh] overflow-y-scroll">
          {gameHistory.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  gameHistory.length - 1 === index
                    ? "h-[30px] flex my-[2px] font-semibold"
                    : "h-[30px] flex my-[2px]"
                }
              >
                Computer Selection: {item.comp} User: {item.user} Winner:{" "}
                {item.winner}
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-2 border-black w-fit mx-auto text-center p-10 rounded-xl relative">
        {gameHistory.length === 0 && (
          <div className="absolute bg-[rgba(0,0,0,0.2)] backdrop-blur-sm h-full w-full top-0 left-0 flex justify-center items-center rounded-xl font-semibold text-[24px]">
            <h2>Please select one of the options</h2>
          </div>
        )}
        <div className=" flex flex-col items-center">
          <h2 className="text-[20px] font-semibold">Computer selection</h2>
          <div className="">{slectionToShow(compSelection)}</div>
        </div>
        <div className="text-[22px]">
          Winner: <span className="font-bold underline">{winner}</span>
        </div>
        <div className="text-[20px] font-semibold flex flex-col items-center">
          <div className="mx-auto">{slectionToShow(userSelection)}</div>
          <h2>userSlection</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
