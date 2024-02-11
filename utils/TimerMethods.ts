import pc from "picocolors"; // Importing the picocolors package for styled console output.
import Bun from "bun"; // Not necessary to import as Bun is automatically recognized by the runtime but it gives extra type information.
import {
  generateRandomArray,
  generateIncreasingArray,
  generateDecreasingArray,
} from "./GenerateArray";
import { bubbleSort } from "../Sorting-Algorithms/BubbleSort";
import { insertionSort } from "../Sorting-Algorithms/InsertionSort";
import { mergeSort } from "../Sorting-Algorithms/MergeSort";
import { quickSort } from "../Sorting-Algorithms/QuickSort";

// This function will generate the arrays based on the given size and display the time it took to generate the array.
export const generateAndTimeArray = (
  name: string,
  length: number,
  generationType: string,
): number[] => {
  // Display the length and generation type of the array that will be created.
  console.log(
    pc.gray(`Creating Array of length: `) +
      pc.magenta(`${length}`) +
      pc.gray(" | with generation type: ") +
      pc.magenta(`${generationType}`) +
      "\n",
  );

  let originalArr;
  let creationStart;

  // Based on the generation type, get the start time and generate the appropriate array.
  switch (generationType) {
    case "random":
      creationStart = Bun.nanoseconds();
      originalArr = generateRandomArray(length, 100); // I set the max value to 100 for readability.
      break;
    case "increasing":
      creationStart = Bun.nanoseconds();
      originalArr = generateIncreasingArray(length);
      break;
    case "decreasing":
      creationStart = Bun.nanoseconds();
      originalArr = generateDecreasingArray(length);
      break;
    default:
      throw new Error(
        "Invalid generation type. Please use 'random', 'increasing', or 'decreasing'.",
      );
  }

  const creationEnd = Bun.nanoseconds(); // Get the end time of the array generation.
  const creationTimeInMS = (creationEnd - creationStart) / 1000000; // Calculate the time it took to generate the array and divide by 1000000 for ms.

  // Display the original array and the time it took to generate it.
  console.log(
    pc.cyan(`Original ${name} (Size: `) +
      pc.magenta(`${originalArr.length}`) +
      pc.cyan("):\n[ ") +
      pc.red(`${originalArr}`) +
      pc.cyan(" ]   [ ") +
      `${creationTimeInMS.toFixed(3)}ms` +
      pc.cyan("]\n"),
  );

  return originalArr;
};

// This function will sort the arrays based on the given sort type and display the time it took to sort the array.
export const sortAndTimeArrays = (
  arrs: number[][],
  names: string[],
  sortType: string,
): number[][] => {
  // Go through each array in arrs sort them and then return the sorted array.
  return arrs.map((arr, index) => {
    let sortedArr;
    let sortStart;

    // Based on the sort type, get the start time and sort the array.
    switch (sortType) {
      case "bubble":
        sortStart = Bun.nanoseconds();
        sortedArr = bubbleSort(arr);
        break;

      case "insertion":
        sortStart = Bun.nanoseconds();
        sortedArr = insertionSort(arr);
        break;

      case "merge":
        sortStart = Bun.nanoseconds();
        sortedArr = mergeSort(arr);
        break;

      case "quick":
        sortStart = Bun.nanoseconds();
        sortedArr = quickSort(arr);
        break;

      case "selection":
        sortStart = Bun.nanoseconds();
        sortedArr = insertionSort(arr);
        break;

      default:
        throw new Error(
          "Invalid sort type. Please use 'bubble', 'insertion', 'merge', 'quick', or 'selection'.",
        );
    }
    const sortEnd = Bun.nanoseconds(); // Get the end time of the array sorting.
    const sortTime = (sortEnd - sortStart) / 1000000; // Calculate the time it took to sort the array and divide by 1000000 for ms.

    // Since the time can get large for bigger array sizes we will convert the time to a more readable format.
    let timeString = "";
    if (sortTime > 60000) {
      const minutes = Math.floor(sortTime / 60000);
      const seconds = ((sortTime % 60000) / 1000).toFixed(0);
      timeString = `${minutes}m ${seconds}s`;
    } else if (sortTime > 1000) {
      timeString = `${(sortTime / 1000).toFixed(3)}s`;
    } else {
      timeString = `${sortTime.toFixed(3)}ms`;
    }

    // Display the sorted array and the time it took to sort it.
    console.log(
      pc.cyan(`Sorted ${names[index]} (Size: `) +
        pc.blue(`${sortedArr.length}`) +
        pc.cyan(`):\n[`) +
        pc.green(`${sortedArr}`) +
        pc.cyan(" ]   [ ") +
        `${timeString}` +
        pc.cyan("]\n"),
    );

    return sortedArr;
  });
};
