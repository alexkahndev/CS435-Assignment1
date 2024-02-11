// Selection Sort Algorithm in TypeScript [O(n^2)]
export const selectionSort = (arr: number[]): number[] => {
  const length = arr.length;

  // Loop through every item in the array
  for (let i = 0; i < length; i++) {
    let min = i; // Set the minimum index to the current index.

    // Loop through every item in the array except for the first i items since they are already sorted.
    for (let j = i + 1; j < length; j++) {
      // If the current item is less than the minimum item, then set the minimum index to the current index.
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // If the minimum index is not the current index, then swap the items.
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
};
