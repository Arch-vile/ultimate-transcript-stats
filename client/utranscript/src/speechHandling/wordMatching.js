import * as dd from "string-similarity";

export const isFoundIn = (words, match) => {
  const bestMatchP = Math.max(
    ...words.map(word => {
      console.log(word + ": " + dd.compareTwoStrings(word, match));
      return dd.compareTwoStrings(word, match);
    })
  );

  console.log(bestMatchP);

  return bestMatchP >= 0.8;
};
