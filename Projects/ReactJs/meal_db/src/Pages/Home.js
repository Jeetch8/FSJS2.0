import axios from "axios";
import { useEffect, useState } from "react";
import AreaSec from "../Components/AreaSec";
import CategorySec from "../Components/CategorySec";
import MealCard from "../Components/MealCard";

function Home() {
  const [mealToShow, setMealToShow] = useState([]);
  const [randGen, setRangen] = useState(false);
  const [userInp, setUserInp] = useState("");
  const [searchBy, setSearchBy] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://www.themealdb.com/api/json/v1/1/random.php")
  //     .then((res) => setMealToShow([...res.data.meals]));
  // }, [randGen]);

  const fetchNewRecipe = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInp}`)
      .then((res) => setMealToShow([...res.data.meals]));
  };
  return (
    <div>
      <div className="flex gap-4 border-2 border-black p-4 w-fit mx-auto my-6">
        <div className="flex gap-2 items-center border-2 border-black rounded-md py-2 px-4">
          <h3 className="font-bold">Name:</h3>
          <input
            type="text"
            placeholder="Enter Meal name or Ingredient"
            className="outline-none"
            onChange={(e) => setUserInp(e.target.value)}
            value={userInp}
            onKeyDown={(e) => (e.key === "Enter" ? fetchNewRecipe() : null)}
          />
        </div>
        <div className="flex items-center border-2 border-black py-2 px-4 rounded-md">
          <h3 className="font-bold">Search for: </h3>
          <select name="" id="" className="bg-[rgba(0,0,0,0.1)]">
            <option value="">Meal Name</option>
            <option value="">Ingredient name</option>
          </select>
        </div>
        <button onClick={() => fetchNewRecipe()} className="bg-zinc-200 p-2">
          Search recipe
        </button>
        <button className="bg-zinc-200 p-2" onClick={() => setRangen(!randGen)}>
          Genrate random
        </button>
      </div>
      <div className="flex justify-center flex-wrap gap-2">
        {mealToShow.map((meal) => {
          return <MealCard meal={meal} />;
        })}
      </div>
      <CategorySec />
      <AreaSec />
    </div>
  );
}

export default Home;
