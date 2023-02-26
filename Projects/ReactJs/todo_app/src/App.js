import { useState } from "react";
import SingleItem from "./Components/SingleItem";
import uuid from "react-uuid";

function App() {
  const [list, setList] = useState([]);
  const [taskCompletedList, setTaskCompletedList] = useState([]);
  const [taskInCompleteList, setTaskIncomplete] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [taskStatus, setTaskStatus] = useState("InComplete");

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

  const addItemToList = () => {
    const itemId = uuid();
    const itemObj = { title: inputVal, checked: false, itemId };
    setTaskIncomplete([...taskInCompleteList, itemObj]);
    if (taskStatus === "InComplete") {
      setList([...list, itemObj]);
    } else if (taskStatus === "Completed") {
      setTaskStatus("InComplete");
      setList([...taskInCompleteList, itemObj]);
    }
    setInputVal("");
  };

  const deleteItem = (itemId) => {
    const itemIndex =
      taskStatus === "Completed"
        ? taskCompletedList.findIndex((item) => {
            return itemId === item.itemId;
          })
        : taskInCompleteList.findIndex((item) => {
            return itemId === item.itemId;
          });

    const listCopy = [...list];
    const listItemIndex = listCopy.findIndex((item) => {
      return itemId === item.itemId;
    });
    if (taskStatus === "Completed" && itemIndex !== -1) {
      taskCompletedList.splice(itemIndex, 1);
    } else if (taskStatus === "InComplete" && itemIndex !== -1) {
      taskInCompleteList.splice(itemIndex, 1);
    }
    listCopy.splice(listItemIndex, 1);
    setList([...listCopy]);
  };

  const changeItemTitle = (index, val) => {
    const newArr = [...list];
    newArr.splice(index, 1, val);
    setList([...newArr]);
  };

  const changeTaskStatus = ({ itemId, title, status }) => {
    if (status) {
      const taskInCompIndex = taskInCompleteList.findIndex((item) => {
        return item.itemId === itemId;
      });
      const listIndex = list.findIndex((item) => {
        return item.itemId === itemId;
      });
      setTaskCompletedList([
        ...taskCompletedList,
        { itemId, title, checked: true },
      ]);
      taskInCompleteList.splice(taskInCompIndex, 1);
      list.splice(listIndex, 1);
    } else if (!status) {
      const taskCompIndex = taskCompletedList.findIndex((item) => {
        return item.itemId === itemId;
      });
      const listIndex = list.findIndex((item) => {
        return item.itemId === itemId;
      });
      setTaskIncomplete([
        ...taskInCompleteList,
        { itemId, title, checked: false },
      ]);
      taskCompletedList.splice(taskCompIndex, 1);
      list.splice(listIndex, 1);
    }
  };

  const newTaskStatusVisible = (status) => {
    if (status === "Completed") {
      setList([...taskCompletedList]);
      setTaskStatus("Completed");
    } else if (status === "InComplete") {
      setList([...taskInCompleteList]);
      setTaskStatus("InComplete");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundList[0]})` }}
      className="bg-cover h-[100vh] w-full text-white"
    >
      <div className="h-[80vh] my-auto bg-[rgba(0,0,0,0.3)] w-[40vw] mx-auto overflow-y-scroll">
        <div className="flex justify-center pt-10">
          <input
            className="border-2 border-black bg-transparent"
            type="text"
            value={inputVal}
            onKeyDown={(e) => (e.key === "Enter" ? addItemToList() : null)}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            className="border-2 border-black"
            onClick={() => addItemToList()}
          >
            Add
          </button>
        </div>
        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => newTaskStatusVisible("InComplete")}
            className={
              taskStatus === "InComplete"
                ? "border-[1px] rounded-full text-black cursor-pointer font-medium px-6 py-2 bg-[rgba(238,238,238,0.7)]"
                : "border-[1px] border-black rounded-full px-6 py-2 cursor-pointer font-medium"
            }
          >
            Task Not Completed
          </button>
          <button
            onClick={() => newTaskStatusVisible("Completed")}
            className={
              taskStatus === "Completed"
                ? "border-[1px] rounded-full text-black font-medium px-6 py-2 bg-[rgba(238,238,238,0.7)] cursor-pointer"
                : "border-[1px] border-black cursor-pointer rounded-full px-6 py-2 font-medium"
            }
          >
            Task Completed
          </button>
        </div>
        <div>
          {list.map((item) => {
            return (
              <SingleItem
                key={item.itemId}
                item={item}
                deleteItem={deleteItem}
                changeItemTitle={changeItemTitle}
                changeTaskStatus={changeTaskStatus}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

// const changeTaskStatusVisible = (status) => {
//   const localArr = [...document.querySelectorAll("input")];
//   const checkBoxArr = [];
//   const newArr = [];
//   localArr.forEach((el) => {
//     if (el.type === "checkbox") {
//       checkBoxArr.push(el);
//     }
//   });
//   if (status === "Completed") {
//     setTaskStatus("Completed");
//   } else if (status === "NotCompleted") {
//     setTaskStatus("NotCompleted");
//   }
//   if (status === "Completed") {
//     checkBoxArr.forEach((item) => {
//       if (item.checked) newArr.push(item);
//     });
//   } else if (status === "NotCompleted") {
//     checkBoxArr.forEach((item) => {
//       if (!item.checked) newArr.push(item);
//     });
//   }
//   setList([...newArr]);
// };
