// Insertion Sort Algorithm in TypeScript [O(n^2)]
export const insertionSort = (arr: number[]): number[] => {
  const length = arr.length;

  // Loop through every item in the array
  for (let i = 1; i < length; i++) {
    let key = arr[i]; // Get the current item to compare with the previous items.
    let j = i - 1; // Get the previous index

    // While the previous index is greater than or equal to 0 and the previous item is greater than the current item swap them.
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Set the current item to the previous item.
    arr[j + 1] = key;
  }

  return arr;
};
