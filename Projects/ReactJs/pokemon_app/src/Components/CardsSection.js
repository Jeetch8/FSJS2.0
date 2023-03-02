import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import { EffectCards } from "swiper";
import { request, gql } from "graphql-request";

export default function CardsSection() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentToSkip, setCurrentToSkip] = useState(0);

  useEffect(() => {
    queryNextArray();
  }, []);

  const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
  const pokeonquery = () => gql`
    query MyQuery {
      pokemon_v2_pokemon(limit: 20, offset: ${currentToSkip}) {
        name
        id
        base_experience
        weight
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        order
      }
    }
  `;

  const queryPoint = async () => {
    const res = request(endpoint, pokeonquery());
    return await res;
  };

  const queryNextArray = async () => {
    setCurrentToSkip(currentToSkip + 20);
    const result = await queryPoint();
    const dataExist =
      pokemonList.length === 0
        ? -1
        : pokemonList.findIndex((el) => {
            return el.id === result.pokemon_v2_pokemon[0].id;
          });
    if (dataExist === -1) {
      const temparr = [...result.pokemon_v2_pokemon];
      setPokemonList([...pokemonList, ...temparr]);
    }
  };
  console.log(pokemonList);
  return (
    <>
      <button onClick={() => queryNextArray()}>Query</button>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onActiveIndexChange={(e) =>
          e.activeIndex === pokemonList.length - 4 ? queryNextArray() : null
        }
      >
        {pokemonList?.map((item) => {
          // if (pokemonList.length - 4 === item.id) queryNextArray();
          const capLetter =
            item.name.charAt(0).toUpperCase() + item.name.slice(1);
          return (
            <SwiperSlide key={item.id} className="rounded-lg">
              <div className="">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${item.id}.png`}
                  alt=""
                  className="border-2 border-black rounded-lg m-auto mt-5"
                  width={"300px"}
                />
                <div>
                  <div>
                    <h2 className="font-bold text-[20px] my-3">{capLetter}</h2>
                  </div>
                  <div className="flex flex-wrap max-w-[280px] mx-auto justify-center">
                    {item?.pokemon_v2_pokemonstats.map((stat, index) => {
                      return (
                        <div
                          className=" border-[1px] border-zinc-300 border-t-0 px-4"
                          key={index}
                        >
                          <h3 className="font-bold">{stat.base_stat}</h3>
                          <h2>
                            <span className="text-[14px]">
                              {stat.pokemon_v2_stat.name}
                            </span>
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
