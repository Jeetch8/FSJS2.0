import { useEffect, useState } from "react";
import SingleItem from "./Components/SingleItem";
import uuid from "react-uuid";

function App() {
  const [list, setList] = useState([]);
  const [taskCompletedList, setTaskCompletedList] = useState([]);
  const [taskInCompleteList, setTaskIncomplete] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [taskStatus, setTaskStatus] = useState("InComplete");

  useEffect(() => {
    // const unParsedInCompList = localStorage.getItem("todoInCompleteList");
    const parsedCompList = JSON.parse(
      localStorage.getItem("todoCompletedList")
    );
    const parsedInCompList = JSON.parse(
      localStorage.getItem("todoInCompleteList")
    );
    if (parsedCompList !== null) {
      const tempArr = [...parsedCompList];
      setTaskCompletedList([...tempArr]);
      if (taskStatus === "Completed") {
        setList([...tempArr]);
      }
    }
    if (parsedInCompList !== null) {
      const tempArr = [...parsedInCompList];
      setTaskIncomplete([...tempArr]);
      if (taskStatus === "InComplete") {
        setList([...tempArr]);
      }
    }
  }, []);

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

  const jsonStringifyCompList = (arr) => {
    localStorage.setItem("todoCompletedList", JSON.stringify([...arr]));
  };
  const jsonStringifyInComplList = (arr) => {
    localStorage.setItem("todoInCompleteList", JSON.stringify([...arr]));
  };

  const addItemToList = () => {
    const itemId = uuid();
    const itemObj = { title: inputVal, checked: false, itemId };
    if (taskStatus === "InComplete") {
      const tempArr = [...list, itemObj];
      setList([...tempArr]);
      jsonStringifyInComplList(tempArr);
      setTaskIncomplete([...tempArr]);
    } else if (taskStatus === "Completed") {
      const tempArr = [...taskInCompleteList, itemObj];
      setTaskStatus("InComplete");
      jsonStringifyInComplList(tempArr);
      setList([...tempArr]);
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
      const arr = [...taskCompletedList];
      arr.splice(itemIndex, 1);
      jsonStringifyCompList(arr);
      setTaskCompletedList([...arr]);
    } else if (taskStatus === "InComplete" && itemIndex !== -1) {
      const arr = [...taskInCompleteList];
      arr.splice(itemIndex, 1);
      jsonStringifyInComplList(arr);
      setTaskIncomplete([...arr]);
    }
    listCopy.splice(listItemIndex, 1);
    setList([...listCopy]);
  };

  const changeItemTitle = (itemId, val) => {
    if (taskStatus === "Completed") {
      const tempArr = [...taskCompletedList];
      const taskCompIndex = tempArr.findIndex((item) => {
        return item.itemId === itemId;
      });
      tempArr[taskCompIndex].title = val;
      setTaskCompletedList([...tempArr]);
      jsonStringifyCompList(tempArr);
      setList([...tempArr]);
    } else if (taskStatus === "InComplete") {
      const tempArr = [...taskInCompleteList];
      const taskInCompIndex = tempArr.findIndex((item) => {
        return item.itemId === itemId;
      });
      tempArr[taskInCompIndex].title = val;
      setTaskIncomplete([...tempArr]);
      jsonStringifyInComplList(tempArr);
      setList([...tempArr]);
    }
  };

  const changeTaskStatus = ({ itemId, title, status }) => {
    if (status) {
      //status:true
      // transfer incomplete to complete
      const taskInCompIndex = taskInCompleteList.findIndex((item) => {
        return item.itemId === itemId;
      });
      const listIndex = list.findIndex((item) => {
        return item.itemId === itemId;
      });
      const tempArr = [...taskCompletedList, { itemId, title, checked: true }];
      window.localStorage.clear();
      setTaskCompletedList([...tempArr]);
      jsonStringifyCompList(tempArr);
      const arr = [...taskInCompleteList];
      arr.splice(taskInCompIndex, 1);
      setTaskIncomplete([...arr]);
      console.log(arr);
      jsonStringifyInComplList(arr);
      list.splice(listIndex, 1);
    } else if (!status) {
      //status:false
      // transfer complete to incomplete
      const taskCompIndex = taskCompletedList.findIndex((item) => {
        return item.itemId === itemId;
      });
      const listIndex = list.findIndex((item) => {
        return item.itemId === itemId;
      });

      // Adding item from CompleteList to incomplete
      // Array copy
      const tempArr = [
        ...taskInCompleteList,
        { title, checked: false, itemId },
        // incomplete task list
      ];
      window.localStorage.clear();
      setTaskIncomplete([...tempArr]);
      jsonStringifyInComplList(tempArr);
      // Removing item from the task Complete List
      const arr = [...taskCompletedList];
      arr.splice(taskCompIndex, 1);
      setTaskCompletedList([...arr]);
      jsonStringifyCompList(arr);
      setList([...arr]);
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
