import React, { useState, useEffect } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import RiseLoader from "react-spinners/RiseLoader";
import SearchBar from "../Components/SearchBar";

const Home = () => {
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
  } = useInfiniteQuery(["infinteQuery"], fetchAxios, {
    getNextPageParam: (firstPage, allpages) => {
      if (allpages.length * 10 >= allpages[0].totalResults) {
        return undefined;
      } else if (allpages.length * 10 < allpages[0].totalResults) {
        return allpages.length + 1;
      }
    },
    onSuccess: (e) => {
      console.log(e, "e");
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
        <div className="flex justify-center items-center">
          <h2 className="font-medium text-[19px]">
            No movie found! please try again
          </h2>
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
        <div className="flex justify-center items-center">
          <h2 className="font-medium text-[19px]">{data?.pages[0].Error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isRefetching && (
        <div className="absolute h-[85vh] w-[100%] bg-[rgba(0,0,0,0.3)] bottom-0 left-0 flex justify-center items-center">
          <RiseLoader color="green" />
        </div>
      )}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        refetch={refetch}
      />
      <div className="flex flex-wrap gap-6">
        {data?.pages.map((page, index) => {
          if (data?.pages[data?.pages.length - 1].Error === "Movie not found!")
            return;
          return page.Search.map((movie) => {
            return (
              <div>
                <img src={movie.Poster} alt="" />
                <div>
                  <h3 className="max-w-[18vw]">Title: {movie.Title}</h3>
                  <h3>Year: {movie.Year}</h3>
                </div>
              </div>
            );
          });
        })}
      </div>
      <div className="h-[20vh] flex justify-center items-center">
        {isFetchingNextPage ? <RiseLoader /> : null}
      </div>
    </div>
  );
};

export default Home;
