import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import SingleMeal from "./Pages/SingleMeal";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:meal" element={<SingleMeal />} />
      </Routes>
    </>
  );
};

export default App;
