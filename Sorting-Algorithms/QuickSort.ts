// Partition the array into two halves and return the pivot index
const partition = (arr: number[], start: number, end: number): number => {
  let pivot = arr[end]; // Get the pivot item
  let pivotIndex = start; // Set the pivot index to the start index

  // Loop through every item in the array
  for (let i = start; i < end; i++) {
    // If the current item is less than the pivot, then swap the current item with the pivot index item and increment the pivot index.
    if (arr[i] < pivot) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]; // Swap the pivot item with the pivot index item.
  return pivotIndex;
};

// Quick Sort Algorithm in TypeScript [O(n log n)]
export const quickSort = (arr: number[]): number[] => {
  let indices: number[] = []; // The stack to store the start and end indices of the array.
  indices.push(0); // Push the start index of the array.
  indices.push(arr.length - 1); // Push the end index of the array.

  // While the indices stack is not empty
  while (indices.length > 0) {
    let end = indices.pop() as number; // Pop the end index of the array.
    let start = indices.pop() as number; // Pop the start index of the array.

    let pivotIndex = partition(arr, start, end); // Get the pivot index of the array.

    // If the pivot index is greater than the start index, then push the start and pivot index - 1 to the indices stack.
    if (pivotIndex - 1 > start) {
      indices.push(start);
      indices.push(pivotIndex - 1);
    }

    // If the pivot index is less than the end index, then push the pivot index + 1 and end to the indices stack.
    if (pivotIndex + 1 < end) {
      indices.push(pivotIndex + 1);
      indices.push(end);
    }
  }

  return arr;
};
