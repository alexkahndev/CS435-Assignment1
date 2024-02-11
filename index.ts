import { generateAndTimeArray, sortAndTimeArrays } from "./utils/TimerMethods";
import pc from "picocolors"; // Importing the picocolors package for styled console output.

// In Bun lines can be read directly from the console with yields lines from stdin.
const getInput = async (): Promise<string> => {
  for await (const line of console) {
    return line;
  }

  return "";
};

// This function calls the generateAndTimeArray function to generate the arrays based on the given size and generation type.
const setArrays = (size: number) => {
  console.log(pc.blue(`\nGenerating Arrays...\n`));
  arrays.Arr1 = generateAndTimeArray("Array 1", size, "increasing");
  arrays.Arr2 = generateAndTimeArray("Array 2", size, "decreasing");
  arrays.Arr3 = generateAndTimeArray("Array 3", size, "random");
};

// START OF PROGRAM

// My header for the assignment.
console.log(
  pc.italic(pc.bold(pc.cyan("Created By: "))) +
    pc.bold(pc.yellow("Alex Kahn\n")) +
    pc.italic(pc.bold(pc.cyan("Starting Programming Assignment 1 - "))) +
    pc.bold(pc.yellow("Sorting Algorithms\n")) +
    pc.italic(pc.bold(pc.cyan("Executing TypeScript files with Bun: "))) +
    pc.bold(pc.yellow("a runtime, compiler, and package manager.\n")),
);

// The arrays that will be used to test the sorting algorithms.
let arrays: {
  Arr1: number[];
  Arr2: number[];
  Arr3: number[];
} = {
  Arr1: [],
  Arr2: [],
  Arr3: [],
};

// The prompts that will be used to get the user's input.
const algorithmPrompt =
  pc.blue("[") + pc.gray("Enter Algorithm Number") + pc.blue("]");
const sizePrompt = pc.blue("[") + pc.gray("Enter Size") + pc.blue("]");
const setUpPrompt =
  pc.blue("Please select a sorting algorithm to run:\n") +
  "1. Bubble Sort\n2. Insertion Sort\n3. Merge Sort\n4. Quick Sort\n5. Selection Sort\nX. Exit\n";

// The user's input for the sorting algorithm and the size of the arrays.
let algorithmType = "none";
let size = -1;

// The main loop of the program that will continue to run until the user exits or an error occurs.
while (true) {
  // Show the user the options for the sorting algorithms.
  console.log(setUpPrompt);

  // Get the user's input for the sorting algorithm while checking if it is valid from the options.
  do {
    console.log(algorithmPrompt);
    algorithmType = await getInput();
  } while (!["1", "2", "3", "4", "5", "X", "x"].includes(algorithmType));

  // If the user wants to exit the program, then the program will exit.
  if (algorithmType == "X" || algorithmType == "x") {
    console.log("Exiting...");
    process.exit(0);
  }

  // Get the user's input for the size of the arrays while checking if it is a valid number greater than 0.
  do {
    console.log(sizePrompt);
    size = Number(await getInput());
  } while (isNaN(size) || size < 0);

  // Set the arrays for the size that the user has chosen.
  setArrays(size);

  // Run the sorting algorithm that the user has chosen.
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
