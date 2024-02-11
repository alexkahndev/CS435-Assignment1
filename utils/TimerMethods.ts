import pc from "picocolors";
import {
  generateRandomArray,
  generateIncreasingArray,
  generateDecreasingArray,
} from "./GenerateArray";
import { bubbleSort } from "../Sorting-Algorithms/BubbleSort";
import { insertionSort } from "../Sorting-Algorithms/InsertionSort";
import { mergeSort } from "../Sorting-Algorithms/MergeSort";
import { quickSort } from "../Sorting-Algorithms/QuickSort";

import Bun from "bun";

export const generateAndTimeArray = (
  name: string,
  length: number,
  generationType: string,
): number[] => {
  console.log(
    pc.gray(`Creating Array of length: `) +
      pc.magenta(`${length}`) +
      pc.gray(" | with generation type: ") +
      pc.magenta(`${generationType}`) +
      "\n",
  );

  let originalArr;
  let creationStart;

  switch (generationType) {
    case "random":
      creationStart = Bun.nanoseconds();
      originalArr = generateRandomArray(length, 100);
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

  const creationEnd = Bun.nanoseconds();
  const creationTimeInMS = (creationEnd - creationStart) / 1000000;
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

export const sortAndTimeArrays = (
  arrs: number[][],
  names: string[],
  sortType: string,
): number[][] => {
  return arrs.map((arr, index) => {
    let sortedArr;
    let sortStart;
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
    const sortEnd = Bun.nanoseconds();
    const sortTime = (sortEnd - sortStart) / 1000000;

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
