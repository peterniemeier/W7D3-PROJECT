import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Link } from 'react-router-dom';
class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
  // console.log(this.props.pokemon[0].name);
    return (

      <ul>
        {this.props.pokemon.map(poke =>
          <Link to= {`/pokemon/${poke.id}`}>
          <PokemonIndexItem key={poke.id} pokemon={poke} /></Link>)
          }

      </ul>
    );

}
}

export default PokemonIndex;
