const initialState = {
  players: [],
  appState: "PROMPT_VIDEO",
}

export default (state = {players: []}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        players:
            Array.from(new Set([...state.players, action.payload.name]))
      }
    case 'VIDEO_INSERTED':
      return {
        videoId: action.payload
      }
    default:
      return state
  }
}


