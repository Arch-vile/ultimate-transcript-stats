import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers.js';

export default function configureStore(initialState = {players: "doo"}) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      || compose;
  const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunk)
  ));

  return store;
}