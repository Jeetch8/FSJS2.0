import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const SingleItem = ({
  item,
  deleteItem,
  changeItemTitle,
  changeTaskStatus,
}) => {
  const [inputVis, setInputVis] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const handlenewTitleChangeFunc = () => {
    changeItemTitle(item.itemId, newTitle);
    setInputVis(false);
  };

  return (
    <div className="flex border-2 border-gray-500 px-6 py-2 w-fit mx-auto my-4 bg-[rgba(0,0,0,0.5)] gap-4 text-white items-center">
      <input
        type="checkbox"
        className="h-[20px] w-[20px]"
        onChange={(e) =>
          changeTaskStatus({
            itemId: item.itemId,
            status: e.target.checked,
            title: item.title,
          })
        }
        defaultChecked={item.checked}
      />
      <div
        className={
          inputVis
            ? "outline-1 outline-white outline flex items-center gap-2"
            : "flex items-center gap-2"
        }
      >
        {item.checked ? (
          <input
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" ? handlenewTitleChangeFunc() : null
            }
            defaultValue={item.title}
            onChange={(e) => setNewTitle(e.target.value)}
            className={
              inputVis
                ? "px-4 bg-transparent py-2 outline-none line-through"
                : "bg-transparent border-none outline-none px-4 py-2 line-through"
            }
            readOnly={!inputVis}
            onClick={() => setInputVis(true)}
          />
        ) : (
          <input
            type="text"
            onKeyDown={(e) =>
              e.key === "Enter" ? handlenewTitleChangeFunc() : null
            }
            defaultValue={item.title}
            onChange={(e) => setNewTitle(e.target.value)}
            className={
              inputVis
                ? "px-4 bg-transparent py-2 outline-none"
                : "bg-transparent border-none outline-none px-4 py-2"
            }
            readOnly={!inputVis}
            onClick={() => setInputVis(true)}
          />
        )}
        {inputVis && (
          <button onClick={() => handlenewTitleChangeFunc()} className="px-2">
            <TiTick />
          </button>
        )}
      </div>
      <div className="flex gap-2 text-[20px]">
        <MdDeleteForever
          onClick={() => deleteItem(item.itemId)}
          className="cursor-pointer"
        />
        <TbEdit
          onClick={() => setInputVis(!inputVis)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SingleItem;
