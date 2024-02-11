export const generateRandomArray = (
  length: number,
  max: number = length,
): number[] => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
};

export const generateIncreasingArray = (length: number): number[] => {
  let array = [];
  for (let i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};

export const generateDecreasingArray = (length: number): number[] => {
  let array = [];
  for (let i = length; i >= 1; i--) {
    array.push(i);
  }
  return array;
};
