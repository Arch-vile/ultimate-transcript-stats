
export default (state = { players: ["mikko2"] }, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        players: Array.from(new Set([...state.players, action.payload.name]))
      }
    default:
      return state
  }
}


