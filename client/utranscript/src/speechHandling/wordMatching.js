import * as dd from "string-similarity";

export const isFoundIn = (words, match) => {
  const bestMatchP = Math.max(
    ...words.map(word => {
      return dd.compareTwoStrings(word, match);
    })
  );

  return bestMatchP >= 0.8;
};
