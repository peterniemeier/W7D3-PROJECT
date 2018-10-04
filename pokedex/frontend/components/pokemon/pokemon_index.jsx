import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

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
        {this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
      </ul>
    );

}
}

export default PokemonIndex;
