import React, { useEffect, useState } from "react";
import logo from '../assets/logo-pixel.gif';

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);


    const pokeData = JSON.parse(localStorage.getItem("favPoke")) || [];
    const favPokemons = pokeData


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  function addToFav(pokemon) {
    favPokemons.push(pokemon);
    localStorage.setItem("favPoke", JSON.stringify(favPokemons));
    console.log("fav", favPokemons);
  }
  
  function removeFromFav(pokemon) {
    localStorage.removeItem(pokemon);
  }

 

  return (
    <div>
      <center>
        <img src={logo} alt="logo" />
      </center>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {pokemons.map((pokemon, index) => (
              <div className="card" key={index}>
                <div className="card-body">
                  <a href={pokemon.url}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
                      alt="pokemon"
                    />
                  </a>
                  <h5 className="card-title">{pokemon.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                      <p>Pokemon abilities:</p>
                  </h6>
                  <button className="btn btn-primary" onClick={() => addToFav(pokemon)}>Add to Favorties</button>
                </div>
              </div>
            ))}
          </div>
          <div className="col">
          {favPokemons.map((pokemon, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <a href={pokemon.url}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                      alt="pokemon"
                    />
                  </a>
                  <h5 className="card-title"> {pokemon.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <p>Pokemon abilities:</p>
                  </h6>
                  <button className="btn btn-danger" onClick={() => removeFromFav(pokemon)}>Remove from Favorties</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;