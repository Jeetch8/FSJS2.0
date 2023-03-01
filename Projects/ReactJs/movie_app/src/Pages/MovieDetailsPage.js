import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdStarRate, MdStarHalf } from "react-icons/md";

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
    return <div>Loading </div>;
  }

  return (
    <div className="flex justify-center m-10 items-start">
      <img src={data.Poster} alt={data.Title} />
      <div>
        {Object.entries(data)?.map(([key, value], index) => {
          if (typeof value === "object" || key === "Poster") return;
          return (
            <div key={index} className="max-w-[300px]">
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
