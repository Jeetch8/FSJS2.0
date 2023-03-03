import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySec = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategoryList([...res.data.categories]));
  }, []);
  return (
    <div className="mt-[100px]">
      <h2 className="text-center text-[20px] font-medium mb-2">
        Different Categories to choose today's meal
      </h2>
      <div className="w-[70vw] mx-auto">
        <div className="h-[40vh] overflow-y-scroll">
          {categoryList?.map((cat, index) => {
            return (
              <div
                key={index}
                className="w-[350px] px-6 rounded-lg m-4 h-[260px] py-4 border-black border-2 basis-[500px] inline-block cursor-pointer"
                onClick={() => navigate(`/MealsByCategory/${cat.strCategory}`)}
              >
                <img
                  src={cat?.strCategoryThumb}
                  alt={cat.strCategory}
                  height={300}
                  width={300}
                />
                <h2 className="text-center text-[18px] font-semibold mt-4">
                  {cat.strCategory}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySec;
