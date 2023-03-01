import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetailsPage from "./Pages/MovieDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
