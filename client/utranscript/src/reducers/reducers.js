export const appStates = ['PROMPT_VIDEO','PROMPT_PLAYERS']

const initialState = {
  players: ["mikko"],
  // appState: "PROMPT_VIDEO",
  appState: "PROMPT_PLAYERS",
  transcripts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players:
            Array.from(new Set([...state.players, action.payload.name]))
      }
    case 'VIDEO_INSERTED':
      return {
        ...state,
        appState: "PROMPT_PLAYERS",
        videoId: action.payload
      }
    case 'TRANSCRIPT':


      return {
        ...state,
        transcripts: [...state.transcripts, action.payload]
      }
    default:
      return state
  }
}


