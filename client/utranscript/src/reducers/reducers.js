export const appStates = [
  "PROMPT_VIDEO",
  "PROMPT_PLAYERS",
  "PROMPT_POINT",
  "PROMPT_POINT"
];

const initialState = {
  appState: "PROMPT_POINT",
  currentPoint: {},
  players: ["mikko", "ville"],
  transcripts: [],
  videoId: "pOEbUUS4APk"
  // appState: "PROMPT_VIDEO",
  // appState: 'PROMPT_PLAYERS',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLAYERS":
      return {
        ...state,
        players: [...state.players, ...action.payload]
      };
    case "REMOVE_PLAYER":
      return {
        ...state,
        players: [...state.players.filter(it => it !== action.payload.name)]
      };
    case "PLAYERS_DONE":
      return {
        ...state,
        appState: "PROMPT_POINT"
      };
    case "VIDEO_INSERTED":
      return {
        ...state,
        appState: "PROMPT_PLAYERS",
        videoId: action.payload
      };
    case "SPEECH":
      return {
        ...state,
        transcripts: [...state.transcripts, action.payload]
      };

    case "SET_POINT_TYPE":
      return {
        ...state,
        currentPoint: {
          type: action.payload
        }
      };
    default:
      return state;
  }
};
