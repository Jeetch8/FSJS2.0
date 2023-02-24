import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const SingleItem = ({ i, item, deleteItem, changeItemTitle }) => {
  const [inputVis, setInputVis] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [taskComp, setTaskComp] = useState(false);
  const handlenewTitleChangeFunc = () => {
    changeItemTitle(i, newTitle);
    setInputVis(false);
  };
  return (
    <div key={i} className="flex">
      <input type="checkbox" onChange={() => setTaskComp(!taskComp)} />
      {inputVis ? (
        <div>
          <input
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" ? handlenewTitleChangeFunc() : null
            }
            value={newTitle === "" ? item : newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button>
            <TiTick onClick={() => handlenewTitleChangeFunc()} />
          </button>
        </div>
      ) : (
        <div
          className={taskComp ? "line-through" : null}
          onClick={() => setInputVis(true)}
        >
          {item}
        </div>
      )}
      <div className="flex">
        <MdDeleteForever onClick={() => deleteItem(i)} />
        <TbEdit onClick={() => setInputVis(!inputVis)} />
      </div>
    </div>
  );
};

export default SingleItem;
