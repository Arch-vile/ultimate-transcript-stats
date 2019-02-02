export const appStates = ['PROMPT_VIDEO', 'PROMPT_PLAYERS']

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
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: [...state.players.filter(it => it != action.payload.name)]
      }
    case 'VIDEO_INSERTED':
      return {
        ...state,
        appState: "PROMPT_PLAYERS",
        videoId: action.payload
      }
    case 'TRANSCRIPT':
      const newTranscript = action.payload
      const updatedTranscripts = [...state.transcripts, newTranscript]

      if (state.appState === 'PROMPT_PLAYERS') {
        const currentPlayers = state.players;
        const allWords =
            newTranscript.split(" ")
            .flatMap(it => it.split("-"))
            .map(it => it.toLowerCase())

        const newPlayers = new Set([...currentPlayers, ...allWords]);
        return {
          ...state,
          transcripts: updatedTranscripts,
          players: [...newPlayers]
        }
      }

      return {
        ...state,
        transcripts: updatedTranscripts
      }
    default:
      return state
  }
}


