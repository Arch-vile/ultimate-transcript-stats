export const speechHandler = (cb, state, text) => {

  const appState = state.appState

  const allWords =
      text.split(" ")
      .flatMap(it => it.split("-"))
      .map(it => it.toLowerCase())

  if (appState === 'PROMPT_PLAYERS') {

    const currentPlayers = new Set([...state.players]);
    const playerCandidates = new Set([...allWords]);
    const newPlayers = [...playerCandidates].filter(
        it => !currentPlayers.has(it));

    cb({
      type: 'ADD_PLAYERS',
      payload: newPlayers
    });
  }

  if (appState === 'PROMPT_POINT') {

    if(new Set([...allWords]).has('hyökkäys')) {
      cb({
        type: 'SET_POINT_TYPE',
        payload: 'offence'
      });
    }

  }

  cb({
    type: "SPEECH",
    payload: text
  })
}