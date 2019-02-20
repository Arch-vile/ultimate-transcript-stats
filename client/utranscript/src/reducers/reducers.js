export const appStates = [
  "PROMPT_VIDEO",
  "PROMPT_PLAYERS",
  "PROMPT_POINT",
  "PROMPT_POINT"
];

const initialState = {
  appState: "PROMPT_POINT",
  currentPoint: {
    type: "offence",
    sequences: [
      {
        isOffence: true,
        throws: [
          {
            from: "Ville",
            goal: false,
            to: "Mikko",
            turn: false
          },
          {
            from: "Mikko",
            goal: false,
            to: "Jaakko",
            turn: true
          }
        ]
      },
      {
        interceptor: "Jaakko",
        isOffence: false,
      }, {
        isOffence: true,
        throws: []
      }
    ]
  },
  players: ["mikko", "ville"],
  transcripts: [],
  videoId: "wamRYJStvKs"
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
      const pointType = action.payload;
      return {
        ...state,
        currentPoint: {
          ...state.currentPoint,
          type: pointType
        }
      };
    default:
      return state;
  }
};
