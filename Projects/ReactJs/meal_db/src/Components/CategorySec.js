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
    <div>
      <h2 className="text-center text-[18px] font-medium mb-2">
        Different Categories to choose today's meal
      </h2>
      <div className="w-[80vw] mx-auto overflow-x-scroll">
        <div className="flex basis-[400px]  gap-2 w-[200vw]">
          {categoryList?.map((cat) => {
            return (
              <div
                className="w-[400px] h-[300px] border-black border-2 basis-[500px] inline cursor-pointer"
                onClick={() => navigate(`/MealsByCategory/${cat.strCategory}`)}
              >
                <img
                  src={cat?.strCategoryThumb}
                  alt={cat.strCategory}
                  // className="w-[300px] basis-[500px]"
                  width={"300px"}
                />
                <h2 className="text-center">{cat.strCategory}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySec;
