import { useState } from "react";
import SingleItem from "./Components/SingleItem";

function App() {
  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState("");

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
    setList([...list, inputVal]);
    setInputVal("");
  };

  const deleteItem = (index) => {
    const newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  };

  const changeItemTitle = (index, val) => {
    const newArr = [...list];
    newArr.splice(index, 1, val);
    setList([...newArr]);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundList[0]})` }}>
      <div>
        <input
          className="border-2 border-black"
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
      <div>
        {list.map((item, i) => {
          return (
            <SingleItem
              key={i}
              item={item}
              i={i}
              deleteItem={deleteItem}
              changeItemTitle={changeItemTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
