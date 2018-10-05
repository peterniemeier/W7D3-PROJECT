import React from 'react';


const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <span>{pokemon.name}</span>
    <img src={pokemon.image_url}/>
    <span>{pokemon.id}</span>
  </li>
)

export default PokemonIndexItem;
