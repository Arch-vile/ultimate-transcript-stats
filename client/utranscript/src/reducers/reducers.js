import {combineReducers} from 'redux';

const playerReducer = (state = { players: ["mikko"] }, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      const players = state.players
      players.add(action.payload.name)
      return {
        players: players
      }
    default:
      return state
  }
}

export default combineReducers({
  playerReducer
});

