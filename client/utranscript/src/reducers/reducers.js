export const appStates = ['PROMPT_VIDEO', 'PROMPT_PLAYERS', 'PROMPT_POINT']

const initialState = {
  players: ["mikko", "ville"],
  videoId: 'pOEbUUS4APk',
   // appState: "PROMPT_VIDEO",
  // appState: "PROMPT_POINT",
  appState: 'PROMPT_PLAYERS',
  transcripts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYERS':
      const currentPlayers = state.players;
      const players = new Set([...currentPlayers, ...action.payload]);
      return {
        ...state,
        players: [...players]
      }
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: [...state.players.filter(it => it !== action.payload.name)]
      }
    case 'PLAYERS_DONE':
      return {
        ...state,
        appState: 'PROMPT_POINT'
      }
    case 'VIDEO_INSERTED':
      return {
        ...state,
        appState: "PROMPT_PLAYERS",
        videoId: action.payload
      }
    case 'SPEECH':
      return {
        ...state,
        transcripts: [...state.transcripts, action.payload]
      }
    default:
      return state
  }
}


