import { isFoundIn } from "./wordMatching";

export const speechHandler = (cb, state, text) => {
  const appState = state.appState;

  const allWords = text
    .split(" ")
    .flatMap(it => it.split("-"))
    .map(it => it.toLowerCase());

  if (appState === "PROMPT_PLAYERS") {
    const currentPlayers = new Set([...state.players]);
    const playerCandidates = new Set([...allWords]);
    const newPlayers = [...playerCandidates].filter(
      it => !currentPlayers.has(it)
    );

    cb({
      payload: newPlayers,
      type: "ADD_PLAYERS"
    });
  }

  if (appState === "PROMPT_POINT") {
    if (isFoundIn(allWords, "hyökkäys")) {
      cb({
        payload: "offence",
        type: "SET_POINT_TYPE"
      });
    }

    if (isFoundIn(allWords, "puolustus")) {
      cb({
        payload: "defence",
        type: "SET_POINT_TYPE"
      });
    }
  }

  cb({
    payload: text,
    type: "SPEECH"
  });
};
