import "./App.css";
import { useState } from "react";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
} from "react-icons/fa";

function App() {
  const [userSelection, setUserSlection] = useState("");
  const [compSelection, setCompSelection] = useState("");
  const [winner, setWinner] = useState("");

  const situations = [
    ["s", "s", null],
    ["s", "r", "r"],
    ["r", "s", "r"],
    ["p", "r", "p"],
    ["r", "p", "p"],
    ["p", "s", "s"],
    ["s", "p", "s"],
    ["p", "p", null],
    ["r", "r", null],
  ];

  const slectionToShow = (val) => {
    if (val === "p") {
      return <FaRegHandPaper />;
    } else if (val === "s") {
      return <FaRegHandScissors />;
    } else if (val === "r") {
      return <FaRegHandRock />;
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
    console.log(localComp, "Comp");
    console.log(userVal, "User");
    if (localComp === "s" && userVal === "s") {
      setWinner("Tie");
    }
    if (localComp === "s" && userVal === "r") {
      setWinner("User");
    }
    if (localComp === "r" && userVal === "s") {
      setWinner("Computer");
    }
    if (localComp === "p" && userVal === "r") {
      setWinner("Computer");
    }
    if (localComp === "r" && userVal === "p") {
      setWinner("User");
    }
    if (localComp === "p" && userVal === "s") {
      setWinner("User");
    }
    if (localComp === "s" && userVal === "p") {
      setWinner("Computer");
    }
    if (localComp === "p" && userVal === "p") {
      setWinner("Tie");
    }
    if (localComp === "r" && userVal === "r") {
      setWinner("Tie");
    }
    console.log(winner);
  }

  return (
    <div>
      <div className="flex">
        <FaRegHandScissors onClick={() => genWinner("s")} />
        <FaRegHandRock onClick={() => genWinner("r")} />
        <FaRegHandPaper onClick={() => genWinner("p")} />
      </div>
      <div className="flex">userSlection: {slectionToShow(userSelection)}</div>
      <div className="flex">
        Computer selection: {slectionToShow(compSelection)}
      </div>
      <div>Winner: {winner}</div>
    </div>
  );
}

export default App;
