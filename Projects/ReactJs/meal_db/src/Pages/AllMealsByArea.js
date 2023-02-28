import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AllMealsByArea = () => {
  const [areaList, setAreaList] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`
      )
      .then((res) => setAreaList([...res.data.meals]));
  }, [params]);

  return (
    <div>
      {areaList?.map((meal) => {
        return (
          <div
            className=" cursor-pointer"
            onClick={() => navigate(`/meal/${meal.idMeal}`)}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllMealsByArea;
