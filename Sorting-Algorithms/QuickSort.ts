const partition = (arr: number[], start: number, end: number): number => {
  let pivot = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

export const quickSort = (arr: number[]): number[] => {
  let indices: number[] = [];
  indices.push(0);
  indices.push(arr.length - 1);

  while (indices.length > 0) {
    let end = indices.pop() as number;
    let start = indices.pop() as number;

    let pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      indices.push(start);
      indices.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      indices.push(pivotIndex + 1);
      indices.push(end);
    }
  }

  return arr;
};
