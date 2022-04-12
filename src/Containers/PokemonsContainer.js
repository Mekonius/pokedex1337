import React, { useEffect, useState } from "react";
import { Pokemon } from "../components/Pokemon";
import { getPokemon, getAllPokemon } from "../services/pokemon";

import "..App.css";

export const PokemonsContainer = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(
        "https://pokeapi/co/api/v2/pokemon?limit=151"
      );
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);


  const loadPokemon = async (pokemon) => {
      let pokemonData = await Promise.all(data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon);
          return pokemonRecord
      }))
      setPokemon(pokemonData);
    }

    return(
            <div>
              {loading ? (
                <h1 style={{ textAlign: "center" }}>Loading...</h1>
              ) : (
                <>
                  <div className="grid-container">
                    {pokemon.map((pokemon) => (
                      <Pokemon key={pokemon.id} pokemon={pokemon} />
                    ))}
                  </div>
                </>
              )}
            </div>
          );
};
