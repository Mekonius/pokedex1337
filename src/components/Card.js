import React from 'react'

export const Card = props  => (
    <div className="card-continer">
        <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer">
            This is a link to the pokemon page
        </a>
    </div>
)

export default Card;