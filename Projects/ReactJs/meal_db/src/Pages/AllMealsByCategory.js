import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AllMealsByCategory = () => {
  const navigate = useNavigate();
  const [catList, setCatList] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
      )
      // .then((res) => console.log(res.data));
      .then((res) => setCatList([...res.data.meals]));
  }, [params]);
  console.log(catList);

  return (
    <div className="flex w-[85vw] flex-wrap gap-4 mx-auto">
      {catList?.map((meal) => {
        return (
          <div
            className="cursor-pointer border-2 border-black p-4"
            onClick={() => navigate(`/meal/${meal.idMeal}`)}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} width={300} />
            <h3 className="font-medium text-[18px] text-center mt-2">
              {meal.strMeal}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllMealsByCategory;
