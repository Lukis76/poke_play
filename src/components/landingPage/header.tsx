import { useEffect, useState } from "react";
import { dataPokemonId } from "../../types/pokemonId"

export const Header = () => {
  const [data, setData] = useState<dataPokemonId>();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/4")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
      <br />
      {data && (
        <>
          <img
            src={data.sprites.other?.dream_world.front_default}
            width={300}
            height={300}
            alt="pokemon"
          />
          <div>
            <ul>
              {data.stats.map((stat) => {
                return (
                  <li key={stat.stat.name}>
                    <h4>{stat.stat.name}</h4>
                    <span>{stat.base_stat}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
