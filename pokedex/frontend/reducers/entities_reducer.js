import {combineReducers} from 'redux';
// import merge from 'lodash/merge';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';

export default combineReducers ({
  items: itemsReducer,
  pokemon: pokemonReducer
});
