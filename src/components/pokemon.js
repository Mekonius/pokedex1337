import React  from "react";
export const Pokemon = ({ pokemon }) => {
  console.log(pokemon)
  


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">

              <div className="card">
                <div className="card-body">
                  <a href={pokemon.url}>
                    <img
                      src={pokemon.sprites.front_default} sizes="20px"
                      alt="pokemon"
                    />
                  </a>
                  <h5 className="card-title">{pokemon.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                      <p>Pokemon abilities:</p>
                  </h6>
                  <button className="btn btn-primary">Add to Favorties</button>
                </div>
              </div>

          </div>
          <div className="col">

              <div  className="card">
                <div className="card-body">
                  <a href={pokemon.url}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${2}.png`}
                      alt="pokemon"
                    />
                  </a>
                  <h5 className="card-title"> {pokemon.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <p>Pokemon abilities:</p>
                  </h6>
                  <button className="btn btn-danger" >Remove from Favorties</button>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};