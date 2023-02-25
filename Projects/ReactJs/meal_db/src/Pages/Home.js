import axios from "axios";
import { useEffect, useState } from "react";
import MealCard from "../Components/MealCard";

function Home() {
  const [mealToShow, setMealToShow] = useState([]);
  const [randGen, setRangen] = useState(false);
  const [userInp, setUserInp] = useState("");
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setMealToShow([...res.data.meals]));
  }, [randGen]);
  console.log(mealToShow);

  const fetchNewRecipe = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInp}`)
      .then((res) => setMealToShow([...res.data.meals]));
  };
  return (
    <div>
      <div className="flex gap-4 border-2 border-black p-4 w-fit mx-auto my-6">
        <input
          type="text"
          placeholder="Search for a meal"
          className="outline-none"
          onChange={(e) => setUserInp(e.target.value)}
          value={userInp}
          onKeyDown={(e) => (e.key === "Enter" ? fetchNewRecipe() : null)}
        />
        <button onClick={() => fetchNewRecipe()} className="bg-zinc-200 p-2">
          Show recipe
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
    </div>
  );
}

export default Home;
