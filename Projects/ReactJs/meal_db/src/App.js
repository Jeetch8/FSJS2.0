import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMealsByArea from "./Pages/AllMealsByArea.js";
import AllMealsByCategory from "./Pages/AllMealsByCategory.js";
import Home from "./Pages/Home.js";
import SingleMeal from "./Pages/SingleMeal";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MealsByArea/:areaId" element={<AllMealsByArea />} />
        <Route
          path="/MealsByCategory/:categoryName"
          element={<AllMealsByCategory />}
        />
        <Route path="/meal/:mealId" element={<SingleMeal />} />
      </Routes>
    </>
  );
};

export default App;
