import React from "react";
import fallbackImg from "./fallback-pokemon.jpg";
import ClipLoader from "react-spinners/FadeLoader";

const SingleCard = ({ searchResults, queryStatus }) => {
  if (queryStatus === "rejected") {
    return (
      <div className="border-2 border-black w-fit mx-auto p-4 rounded-md text-center">
        <h2>Something went wrong</h2>
        <h3>Please try again</h3>
      </div>
    );
  }
  if (!searchResults || queryStatus === "fetching") {
    return (
      <div className="border-2 border-black w-fit mx-auto p-4 rounded-md relative">
        {queryStatus === "fetching" && (
          <div className="h-full absolute bg-[rgba(0,0,0,0.2)] top-0 bottom-0 w-full left-0 flex justify-center items-center">
            <ClipLoader color="green" size={50} />
          </div>
        )}
        <img src={fallbackImg} width={300} alt="" />
        <div>??????</div>
        <div>??</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border-[1px] border-black pb-4 px-6 bg-white relative">
      {queryStatus === "fetching" && (
        <div className="h-full absolute bg-[rgba(0,0,0,0.2)] top-0 bottom-0 w-full left-0 flex justify-center items-center">
          <ClipLoader color="green" size={50} />
        </div>
      )}
      <div className="">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${searchResults.id}.png`}
          alt=""
          className="border-2 border-black rounded-lg m-auto mt-5"
          width={"300px"}
        />
        <div>
          <div>
            <h2 className="font-bold text-[20px] my-3">
              {searchResults.name.charAt(0).toUpperCase() +
                searchResults.name.slice(1)}
            </h2>
          </div>
          <div className="flex flex-wrap max-w-[280px] mx-auto justify-center">
            {searchResults?.stats.map((stat, index) => {
              return (
                <div
                  className=" border-[1px] border-zinc-300 border-t-0 px-4"
                  key={index}
                >
                  <h3 className="font-bold">{stat.base_stat}</h3>
                  <h2>
                    <span className="text-[14px]">{stat.stat.name}</span>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
