class BubbleSort {
  title = 'BubbleSort';

  sort(originalArray) {
    const inputArr = [...originalArray];

    let len = inputArr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        if (inputArr[i] > inputArr[i + 1]) {
          let tmp = inputArr[i];
          inputArr[i] = inputArr[i + 1];
          inputArr[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);

    return inputArr;
  }
}

export const bubbleSorting = new BubbleSort();
