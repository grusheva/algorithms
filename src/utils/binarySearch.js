export const binarySearch = (sortedArray, target) => {
  let start = 0;
  let end = sortedArray.length;
  let foundIdsMap = {};

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle].hex.slice(0, target.length) === target) {
      sortedArray.slice(start, end + 1).forEach(({ hex, id }) => {
        if (hex.slice(0, target.length) === target) {
          foundIdsMap[id] = true;
        }
      });
      return foundIdsMap;
    } else if (sortedArray[middle].hex.slice(0, target.length) < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return foundIdsMap;
};
