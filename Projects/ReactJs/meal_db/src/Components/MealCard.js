import React from "react";
import { useNavigate } from "react-router-dom";

const MealCard = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border-2 border-black w-fit p-4 rounded-sm"
      onClick={() => navigate(`/${meal.strMeal}`)}
    >
      <div className="">
        <img src={meal.strMealThumb} alt="" className="h-[280px] w-[320px]" />
      </div>
      <div className="text-center font-medium text-[18px] max-w-[200px] mx-auto mt-2">
        {meal.strMeal}
      </div>
    </div>
  );
};

export default MealCard;
