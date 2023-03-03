import React from "react";
import { useNavigate } from "react-router-dom";

const MealCard = ({ meal, queryStatus }) => {
  const navigate = useNavigate();
  if (queryStatus === "fetching") {
    return (
      <div className="border-2 border-black w-fit p-4 rounded-lg cursor-pointer">
        <img
          src="https://media.tenor.com/jlNU9r6s0TQAAAAM/dinner-cooking.gif"
          alt=""
        />
        <div className="text-center">
          <h2>Loading....</h2>
          <h3>Please wait</h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-2 border-black w-fit p-4 rounded-lg cursor-pointer"
      onClick={() => navigate(`/meal/${meal.idMeal}`)}
    >
      <div className="">
        <img
          src={meal.strMealThumb}
          alt=""
          className="h-[280px] w-[320px] rounded-lg"
        />
      </div>
      <div className="text-center font-medium text-[18px] max-w-[200px] mx-auto mt-2">
        {meal.strMeal}
      </div>
    </div>
  );
};

export default MealCard;
