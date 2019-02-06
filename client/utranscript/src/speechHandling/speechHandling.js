export const speechHandler = (cb, state, text) => {

  if (state.appState === 'PROMPT_PLAYERS') {
    const allWords =
        text.split(" ")
        .flatMap(it => it.split("-"))
        .map(it => it.toLowerCase())

    cb({
      type: 'ADD_PLAYERS',
      payload: allWords
    });
  }

  cb({
    type: "SPEECH",
    payload: text
  })
}