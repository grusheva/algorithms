export const getShuffledArr = arr =>
  arr.sort(function () {
    return Math.random() - 0.5;
  });
