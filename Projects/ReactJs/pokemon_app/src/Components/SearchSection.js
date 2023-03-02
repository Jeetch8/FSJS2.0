import React, { useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard";

const SearchSection = () => {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const searchPokemonFunc = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`).then((res) => {
      const resData = res.data;
      console.log(resData);
      setSearchResults({
        id: resData.id,
        name: resData.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${resData.id}.png`,
        stats: [...resData.stats],
      });
    });
  };
  return (
    <div>
      <div className="border-2 border-black w-fit mx-auto my-6 px-6 py-2">
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? searchPokemonFunc() : null)}
          className="h-[30px] mr-3"
        />
        <button
          onClick={() => searchPokemonFunc()}
          className="bg-[rgba(0,0,0,0.1)] px-4 p-2 rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="w-full flex justify-center">
        <SingleCard searchResults={searchResults} />
      </div>
    </div>
  );
};

export default SearchSection;
