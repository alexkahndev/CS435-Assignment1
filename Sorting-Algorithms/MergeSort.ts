// Merge two sorted arrays into one sorted array.
const merge = (left: number[], right: number[]): number[] => {
  let result = []; // The array that will be returned with the sorted items.
  let leftIndex = 0; // The index for the left array.
  let rightIndex = 0; // The index for the right array.

  // Loop through the left and right arrays and compare the items.
  while (leftIndex < left.length && rightIndex < right.length) {
    // If the left item is less than the right item, then add the left item to the result array and increment the left index.
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    // Else the right item is less than the left item, then add the right item to the result array and increment the right index.
    else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); // Add the remaining items from the left and right arrays to the result array.
};

// Merge Sort Algorithm in TypeScript [O(n log n)]
export const mergeSort = (arr: number[]): number[] => {
  // If the array has 1 or less items, then it is already sorted this is our base case.
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // Get the middle index of the array.
  const left = arr.slice(0, middle); // Get the left half of the array.
  const right = arr.slice(middle); // Get the right half of the array.

  return merge(mergeSort(left), mergeSort(right)); // Merge the sorted left and right arrays.
};
