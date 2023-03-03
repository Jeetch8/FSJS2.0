import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FallbackImg from "./icon-256x256.png";
import { useParams } from "react-router-dom";

const MealCard = () => {
  const [details, setDetails] = useState({});
  const [allIngredientsWithMes, setAllIngredientsWithMes] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
      )
      .then((res) => res.data.meals[0])
      .then((meal) => intialProcess(meal));
  }, []);

  const intialProcess = (meal) => {
    setDetails(meal);
    const localIngredientArr = [];
    const localMeasurementArr = [];
    const localMeasWithIng = [];
    for (const prop in meal) {
      if (String(meal[prop]).length !== 0 && meal[prop] !== null) {
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
    <div className="flex justify-evenly">
      <div className="border-2 border-black p-6 h-fit mt-10 rounded-lg">
        <img
          src={details.strMealThumb}
          alt=""
          className="h-[400px] w-[400px] rounded-lg"
        />
        <h2 className="text-center">{details.strMeal}</h2>
        <a href={details.strYoutube} className="underline text-center">
          Youtube Link
        </a>
      </div>
      <div className="w-[600px]">
        <h3 className="text-[25px] text-center mt-8 mb-4 font-semibold">
          Step by step recipe
        </h3>
        <p className="text-center">{details.strInstructions}</p>
        <h2 className="text-[20px] font-semibold text-center mt-12">
          All the ingredients required
        </h2>
        <div className="flex flex-wrap">
          {allIngredientsWithMes?.map((li, index) => {
            let image = li.split(" ");
            return (
              <div key={index}>
                <img
                  onError={(e) => (e.currentTarget.src = FallbackImg)}
                  src={`https://www.themealdb.com/images/ingredients/${
                    image.length > 3
                      ? image[image.length - 2] +
                        `%20` +
                        image[image.length - 1]
                      : image[image.length - 1]
                  }.png`}
                  width={200}
                  alt={image[image.length - 1]}
                />
                <div className="text-center">{li}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MealCard;
