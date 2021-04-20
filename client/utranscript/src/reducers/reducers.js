import produce from "immer";

export const appStates = [
  "PROMPT_VIDEO",
  "PROMPT_PLAYERS",
  "PROMPT_POINT",
];

const initialState = {
  appState: "PROMPT_VIDEO",
  players: [],
  transcripts: [],
  /*currentPoint: {
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
        isOffence: false
      },
      {
        isOffence: true,
        throws: []
      }
    ]
  },
  players: ["mikko", "ville"],
  transcripts: [],
  videoId: "wamRYJStvKs"*/
};

const pointInitialState = () => {
  return {sequences: [{
    throws: []
    }]};
}

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
        appState: "PROMPT_POINT",
        currentPoint: pointInitialState(),
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

      const newState = produce(state, draft => {
        const sequences = draft.currentPoint.sequences;
        const currentTurn = sequences[sequences.length - 1];
        currentTurn.isOffence = pointType === "offence";
      });

      return {...newState};
    default:
      return state;
  }
};
