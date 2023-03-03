import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

const MovieDetailsPage = () => {
  //   const [movieData, setMovieData] = useState({});
  const params = useParams().movieId;
  const { data, isLoading, isFetching } = useQuery(["fetchMovie"], async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=f9fae970&i=${params}`
    );
    return res.data;
  });
  if (isFetching || isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <HashLoader size={50} color="green" />
      </div>
    );
  }

  return (
    <div className="flex justify-evenly m-10 items-start max-w-[80vw] mx-auto">
      <img src={data.Poster} alt={data.Title} className="rounded-lg" />
      <div>
        {Object.entries(data)?.map(([key, value], index) => {
          if (typeof value === "object" || key === "Poster" || key === "imdbID")
            return;
          return (
            <div key={index} className="max-w-[500px]">
              <span className="font-medium">{key}: </span>
              {value}
            </div>
          );
        })}
        <div className="flex">
          <h3 className="font-medium">Ratings: </h3>
          <ul>
            {data?.Ratings.map((el, index) => {
              return (
                <li key={index} className="flex gap-4">
                  {el.Source}
                  <div>{el.Value}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
