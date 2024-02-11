// Generate an array of length with random numbers from 0 to max.
export const generateRandomArray = (
  length: number,
  max: number = length,
): number[] => {
  let array = [];

  // Loop through starting at 0 and stopping before the length of the array and push a random number from 0 to max into the array each time.
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
};

// Generate an array of length with increasing numbers from 1 to length.
export const generateIncreasingArray = (length: number): number[] => {
  let array = [];

  // Loop through starting at 1 and stopping at the length of the array and push the current index into the array each time.
  for (let i = 1; i <= length; i++) {
    array.push(i);
  }
  return array;
};

// Generate an array of length with decreasing numbers from length to 1.
export const generateDecreasingArray = (length: number): number[] => {
  let array = [];

  // Loop through starting at the length of the array and stopping at 1 and push the current index into the array each time.
  for (let i = length; i >= 1; i--) {
    array.push(i);
  }
  return array;
};
