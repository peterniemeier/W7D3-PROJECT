import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// import {fetchAllPokemon} from './util/api_util';
// import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
// import {selectAllPokemon} from './reducers/selectors';
import { Provider } from 'react-redux';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();


  // window.store = store;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<Root store={store} />, root);
});
