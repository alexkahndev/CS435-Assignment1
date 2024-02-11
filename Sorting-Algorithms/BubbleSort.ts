// Bubble Sort Algorithm in TypeScript [O(n^2)]
export const bubbleSort = (arr: number[]): number[] => {
  const length = arr.length;

  // Loop through every item in the array
  for (let i = 0; i < length; i++) {
    // Loop through every item in the array except for the last i items since they are already sorted.
    for (let j = 0; j < length - i - 1; j++) {
      // If the current item is greater than the next item, then swap them.
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
