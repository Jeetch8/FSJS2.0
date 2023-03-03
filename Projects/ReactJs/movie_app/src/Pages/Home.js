import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import RiseLoader from "react-spinners/RiseLoader";
import SearchBar from "../Components/SearchBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(
    `https://www.omdbapi.com/?apikey=f9fae970&s=lone`
  );
  const fetchAxios = async ({ pageParam = 1 }) => {
    const res = await axios.get(`${searchQuery}&page=${pageParam}`);
    return res.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetchingNextPage,
    isRefetching,
    isLoading,
  } = useInfiniteQuery(["infinteQuery"], fetchAxios, {
    getNextPageParam: (firstPage, allpages) => {
      if (allpages.length * 10 >= allpages[0].totalResults) {
        return undefined;
      } else if (allpages.length * 10 < allpages[0].totalResults) {
        return allpages.length + 1;
      }
    },
  });

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (data?.pages[0].Error === "Movie not found!") {
    return (
      <div>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          refetch={refetch}
        />
        <div className="relative">
          <div className="flex justify-center items-center">
            <h2 className="font-medium text-[19px]">
              No movie found! please try again
            </h2>
          </div>
          {(isRefetching || isLoading) && (
            <div className="absolute h-[85vh] w-[100%] bg-[rgba(0,0,0,0.3)] top-0 left-0 flex justify-center items-center">
              <RiseLoader color="green" />
            </div>
          )}
        </div>
      </div>
    );
  } else if (data?.pages[0].Error) {
    return (
      <div>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          refetch={refetch}
        />
        <div className="relative">
          <div className="flex justify-center items-center">
            <h2 className="font-medium text-[19px]">{data?.pages[0].Error}</h2>
          </div>
          {(isRefetching || isLoading) && (
            <div className="absolute h-[85vh] w-[100%] bg-[rgba(0,0,0,0.3)] top-20 left-0 flex justify-center items-center">
              <RiseLoader color="green" />
            </div>
          )}
        </div>
      </div>
    );
  }

  console.log(data);

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        refetch={refetch}
      />
      <div className="flex flex-wrap gap-6 justify-center relative">
        {data?.pages.map((page) => {
          if (data?.pages[data?.pages.length - 1].Error === "Movie not found!")
            return;
          return page.Search.map((movie) => {
            return (
              <div
                key={movie.imdbID}
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
                className="pt-10 border-t-2 px-4 cursor-pointer"
              >
                <img src={movie.Poster} alt={movie.Title} className="mx-auto" />
                <div>
                  <h3 className="max-w-[18vw] font-medium">
                    Title: {movie.Title}
                  </h3>
                  <h3>Year: {movie.Year}</h3>
                </div>
              </div>
            );
          });
        })}
        {(isRefetching || isLoading) && (
          <div className="absolute h-[85vh] w-[100%] bg-[rgba(0,0,0,0.3)] top-0 left-0 flex justify-center items-center">
            <RiseLoader color="green" />
          </div>
        )}
      </div>
      <div className="h-[20vh] flex justify-center items-center">
        {isFetchingNextPage && <RiseLoader />}
      </div>
    </div>
  );
};

export default Home;
