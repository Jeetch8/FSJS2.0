import React, { useState } from "react";

const SearchBar = ({ searchQuery, setSearchQuery, refetch }) => {
  const [userInput, setUserrInput] = useState("");
  const [inputYear, setInputYear] = useState(2023);
  const [inputType, setInputType] = useState("Movie");
  const fetchNewMovies = () => {
    const splittedQuery = searchQuery.split("&");
    setSearchQuery(
      `${splittedQuery[0]}&type=${inputType}&y=${inputYear}&s=${userInput}`
    );
    refetch();
    setTimeout(() => {
      refetch();
    }, 1000);
  };
  return (
    <div className="my-8 mx-auto border-2 border-black w-fit p-4">
      <input
        type="text"
        placeholder="Search movie"
        className="bg-zinc-100 py-2 px-4 border-2 border-black rounded-md"
        onChange={(e) => setUserrInput(e.target.value)}
        value={userInput}
        onKeyDown={(e) => (e.key === "Enter" ? fetchNewMovies() : null)}
      />
      <select
        name=""
        id=""
        className="border-2 border-black p-2 rounded-md mx-6 bg-zinc-100"
        onChange={(e) => setInputType(e.target.selectedOptions[0].innerText)}
      >
        <option value="">Movie</option>
        <option value="">Series</option>
        <option value="">Episode</option>
      </select>
      <input
        type="number"
        defaultValue={2023}
        onChange={(e) => setInputYear(e.target.value)}
        className="w-[90px] mx-6 bg-zinc-100 px-4 py-2 border-2 border-black rounded-md"
      />
      <button
        className="bg-zinc-300 px-6 py-2"
        onClick={() => fetchNewMovies()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
