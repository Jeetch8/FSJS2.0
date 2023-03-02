import React from "react";
import fallbackImg from "./fallback-pokemon.jpg";

const SingleCard = ({ searchResults }) => {
  console.log(searchResults);
  if (!searchResults) {
    return (
      <div className="border-2 border-black w-fit mx-auto p-4 rounded-md">
        <img src={fallbackImg} width={300} alt="" />;<div>??????/</div>
        <div>??</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border-[1px] border-black pb-4 px-6 bg-white">
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

// <div className=" border-black border-[1px] mx-auto bg-white rounded-lg">
//   <img
//     src={searchResults?.image}
//     width={300}
//     className="border-2 border-black rounded-lg mt-4 mx-6"
//     alt={searchResults?.name}
//   />
//   <h3>{searchResults?.name}</h3>
//   <div>
//     {searchResults?.abilities.map((el) => {
//       return <h3>{el?.ability.name}</h3>;
//     })}
//   </div>
// </div>
