import {RECEIVE_ITEMS} from '../actions/pokemon_actions';

import merge from 'lodash/merge';

export default (state = {},action) => {
  switch(action.type) {
    case 'RECEIVE_ITEMS':
      return merge ({}, state, action.pokemon);
    default:
      return state;
  }
};
