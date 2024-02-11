import { generateAndTimeArray, sortAndTimeArrays } from "./utils/TimerMethods";
import pc from "picocolors";

const getInput = async (): Promise<string> => {
  for await (const line of console) {
    return line;
  }

  return "";
};

const setArrays = (size: number) => {
  console.log(pc.blue(`\nGenerating Arrays...\n`));
  arrays.Arr1 = generateAndTimeArray("Array 1", size, "random");
  arrays.Arr2 = generateAndTimeArray("Array 2", size, "increasing");
  arrays.Arr3 = generateAndTimeArray("Array 3", size, "decreasing");
};

console.log(
  pc.italic(pc.bold(pc.cyan("Created By: "))) +
    pc.bold(pc.yellow("Alex Kahn\n")) +
    pc.italic(pc.bold(pc.cyan("Starting Programming Assignment 1 - "))) +
    pc.bold(pc.yellow("Sorting Algorithms\n")) +
    pc.italic(pc.bold(pc.cyan("Executing TypeScript files with Bun: "))) +
    pc.bold(pc.yellow("a runtime, compiler, and package manager.\n")),
);

let arrays: {
  Arr1: number[];
  Arr2: number[];
  Arr3: number[];
} = {
  Arr1: [],
  Arr2: [],
  Arr3: [],
};

const algorithmPrompt =
  pc.blue("[") + pc.gray("Enter Algorithm Number") + pc.blue("]");
const sizePrompt = pc.blue("[") + pc.gray("Enter Size") + pc.blue("]");
const setUpPrompt =
  pc.blue("Please select a sorting algorithm to run:\n") +
  "1. Bubble Sort\n2. Insertion Sort\n3. Merge Sort\n4. Quick Sort\n5. Selection Sort\nX. Exit\n";

let algorithmType = "none";
let size = -1;

while (true) {
  console.log(setUpPrompt);

  do {
    console.log(algorithmPrompt);
    algorithmType = await getInput();
  } while (!["1", "2", "3", "4", "5", "X", "x"].includes(algorithmType));

  if (algorithmType == "X" || algorithmType == "x") {
    console.log("Exiting...");
    process.exit(0);
  }

  do {
    console.log(sizePrompt);
    size = Number(await getInput());
  } while (isNaN(size) || size < 0);

  setArrays(size);

  switch (algorithmType) {
    case "1":
      console.log(pc.blue("\nStarting Bubble Sort...\n"));
      sortAndTimeArrays(Object.values(arrays), Object.keys(arrays), "bubble");
      break;
    case "2":
      console.log(pc.blue("\nStarting Insertion Sort...\n"));
      sortAndTimeArrays(
        Object.values(arrays),
        Object.keys(arrays),
        "insertion",
      );
      break;
    case "3":
      console.log(pc.blue("\nStarting Merge Sort...\n"));
      sortAndTimeArrays(Object.values(arrays), Object.keys(arrays), "merge");
      break;
    case "4":
      console.log(pc.blue("\nStarting Quick Sort...\n"));
      sortAndTimeArrays(Object.values(arrays), Object.keys(arrays), "quick");
      break;
    case "5":
      console.log(pc.blue("\nStarting Selection Sort...\n"));
      sortAndTimeArrays(
        Object.values(arrays),
        Object.keys(arrays),
        "selection",
      );
      break;
    default:
      throw new Error(
        "Invalid sort type. Please use '[1] bubble', '[2] insertion', '[3] merge', '[4] quick', or '[5] selection'.",
      );
  }
}
