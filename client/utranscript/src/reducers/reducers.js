
export default (state = { players: ["mikko2"] }, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      const playerList = state.players
      playerList.push(action.payload.name)
      // const playerList = ["foo"]
      return {
        players: [...playerList]
      }
    default:
      return state
  }
}


