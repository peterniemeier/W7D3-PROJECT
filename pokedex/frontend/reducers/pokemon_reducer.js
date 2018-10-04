import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export default pokemonReducer = (state = {},action) => {
  switch(action.type) {
    case 'RECEIVE_ALL_POKEMON':
      return merge ({},state,action.pokemon);
    default:
      return state;
  }
};
