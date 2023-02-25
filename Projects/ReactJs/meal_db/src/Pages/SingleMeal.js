import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MealCard = () => {
  const [details, setDetails] = useState({});
  const [allIngredientsWithMes, setAllIngredientsWithMes] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.meal}`
      )
      .then((res) => res.data.meals[0])
      .then((meal) => intialProcess(meal));
  }, []);

  const intialProcess = (meal) => {
    setDetails(meal);
    console.log(meal);
    const localIngredientArr = [];
    const localMeasurementArr = [];
    const localMeasWithIng = [];
    for (const prop in meal) {
      if (meal[prop] !== "") {
        if (prop.startsWith("strIngredient")) {
          localIngredientArr.push(meal[prop]);
        } else if (prop.startsWith("strMeasure")) {
          localMeasurementArr.push(meal[prop]);
        }
      }
    }
    localIngredientArr.forEach((li, index) => {
      localMeasWithIng.push(`${localMeasurementArr[index]} ${li}`);
    });
    setAllIngredientsWithMes([...localMeasWithIng]);
  };
  return (
    <div className="flex">
      <div className="border-2 border-black p-6 h-fit">
        <img
          src={details.strMealThumb}
          alt=""
          className="h-[400px] w-[400px]"
        />
        <h2 className="text-center">{details.strMeal}</h2>
        <a href={details.strYoutube} className="underline text-center">
          Youtube Link
        </a>
      </div>
      <div>
        <div className="grid grid-cols-[10vw,10vw,10vw]">
          {allIngredientsWithMes?.map((li, index) => {
            let image = li.split(" ");
            return (
              <div key={index}>
                <img
                  src={`https://www.themealdb.com/images/ingredients/${
                    image[image.length - 1]
                  }.png`}
                  alt={image[image.length - 1]}
                />
                <div className="text-center">{li}</div>
              </div>
            );
          })}
        </div>
        <p className="text-center max-w-[40vw]">{details.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealCard;
