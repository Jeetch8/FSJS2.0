import axios from "axios";
import { useEffect, useState } from "react";
import CategorySec from "../Components/CategorySec";
import MealCard from "../Components/MealCard";

function Home() {
  const [mealToShow, setMealToShow] = useState([]);
  const [randGen, setRangen] = useState(false);
  const [userInp, setUserInp] = useState("");
  const [queryStatus, setQueryStatus] = useState("idle");
  const [searchBy, setSearchBy] = useState("search.php?s=");
  useEffect(() => {
    setQueryStatus("fetching");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setMealToShow([...res.data.meals]))
      .then(setQueryStatus("resolved"));
  }, [randGen]);

  const fetchNewRecipe = () => {
    setQueryStatus("fetching");
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/${searchBy}${userInp}`)
      .then((res) =>
        res.data.meals !== null
          ? setMealToShow([...res.data.meals])
          : setMealToShow(null)
      )
      .then((meal) =>
        meal === null ? setQueryStatus("rejected") : setQueryStatus("resolved")
      );
  };

  const selectChangeFunc = (selectedOption) => {
    if (selectedOption === "byIngredient") {
      setSearchBy("filter.php?i=");
    } else if (selectedOption === "byName") {
      setSearchBy("search.php?s=");
    }
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
            onKeyDown={(e) => e.key === "Enter" && fetchNewRecipe()}
          />
        </div>
        <div className="flex items-center border-2 border-black py-2 px-4 rounded-md">
          <h3 className="font-bold">Search for: </h3>
          <select
            name=""
            id=""
            className="bg-[rgba(0,0,0,0.1)]"
            onChange={(e) => selectChangeFunc(e.target.value)}
          >
            <option value="byName">Meal Name</option>
            <option value="byIngredient">Ingredient name</option>
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
        {mealToShow !== null ? (
          mealToShow.map((meal) => {
            return (
              <MealCard
                meal={meal}
                key={meal.idMeal}
                queryStatus={queryStatus}
              />
            );
          })
        ) : (
          <div className="border-2 border-black rounded-lg h-[370px] w-[350px] font-semibold">
            Please try again with different name or check the spelling
          </div>
        )}
      </div>
      <CategorySec />
    </div>
  );
}

export default Home;

// if (meal === null) {
//   return <div>Please try again with differnt name or check the spelling</div>;
// }
