# CS 435-102 Programming Assignment 1
**Alex Kahn**  
📧 ak2534@njit.edu

## Objective
Implement and compare different types of sorting algorithms:

## Language and Runtime
- Language: Typescript
- Runtime: Bun (or your preferred Typescript runtime)

I chose to use Typescript and Bun since those are two technologies that I use for work and it is good knowledge to have these sorting algorithms.

## Installation
To install Bun, you can run the following commands:

For macOS, Linux, and WSL:
```bash
curl -fsSL https://bun.sh/install | bash
```
For Windows (experimental build):
```powershell
powershell -c "irm bun.sh/install.ps1|iex"
```
> Keep in mind the build for Windows is experimental and is not as fast or compatible as for Mac or Linux. I suggest using WSL if you’re gonna run this code on Windows. If you need a guide to install WSL, follow my guide [here](https://docs.google.com/document/d/1mO9zLiJc_oeuXeMjjX0GdOEZW6lvYjpCwce7Vlwup1o/edit?usp=sharing).

After installing Bun, inside of the project directory run:
```
bun install
bun run dev
```

## Usage
If everything was installed correctly you will see

![as1-header](https://github.com/alexkahndev/CS435-Assignment1/assets/140863288/280a55f4-95c0-4dcc-a278-3687a1f5c6fc)

Next you'll be prompted to enter an algorithm number and an array size

![user-prompt](https://github.com/alexkahndev/CS435-Assignment1/assets/140863288/008911dd-07c8-477b-915d-fa2784905d23)

It will generate the increasing,decreasing, and random array of your size and display the generated array along with how long it took

![generate-arrays](https://github.com/alexkahndev/CS435-Assignment1/assets/140863288/ce4ba4e5-d5d0-41f4-a4c9-a1ee566de02a)

Based on which algorithm you chose the program will use it to sort the array then display the sorted array along with how much time it took

![sort](https://github.com/alexkahndev/CS435-Assignment1/assets/140863288/e5dcc89e-3915-4c12-ad7b-cfe3547d2ff3)

You will keep being prompted to do this until you enter ‘x’ or ‘X’ as and algorithm option, additionally you can kill the program with ctrl + c

## Results

### Bubble Sort

| Input Size / Sequence | Increasing | Decreasing | Random |
| --------------------- | ---------- | ---------- | ------ |
| 10                    |      0.002 ms      |      0.016 ms      |   0.003 ms     |
| 100                   |      0.245 ms      |     0.134 ms       |    0.048 ms    |
| 1,000                 |       1.408 ms     |       2.044 ms     |     1.940 ms   |
| 100,000               |        14.389 s    |       20.256 s     |   30.495 s     |

### Insertion Sort

| Input Size / Sequence | Increasing | Decreasing | Random |
| --------------------- | ---------- | ---------- | ------ |
| 10                    |     0.122 ms       |     0.003 ms       |     0.002 ms   |
| 100                   |        0.004 ms  |      1.502 ms      |     0.055 ms   |
| 1,000                 |       0.129 ms     |       1.854 ms     |    0.663 ms    |
| 100,000               |      0.717 ms      |     11.510 s       |    5.644 s    |

### Merge Sort

| Input Size / Sequence | Increasing | Decreasing | Random |
| --------------------- | ---------- | ---------- | ------ |
| 10                    |      0.167 ms      |       1.250 ms     |    0.049 ms    |
| 100                   |       1.811 ms     |       0.187 ms     |     0.115 ms   |
| 1,000                 |      0.534 ms     |     0.574 ms       |    0.668 ms    |
| 100,000               |      61.915 ms      |      40.590 ms      |    47.929 ms    |

### Quick Sort

| Input Size / Sequence | Increasing | Decreasing | Random |
| --------------------- | ---------- | ---------- | ------ |
| 10                    |     0.237 ms       |     0.011 ms       |    0.005 ms    |
| 100                   |       0.267 ms     |      0.11 ms      |     0.039 ms   |
| 1,000                 |      1.531 ms      |     1.230 ms       |    0.120 ms    |
| 100,000               |       12.995 s     |       10.593 s     |     83.986 ms   |

### Selection Sort

| Input Size / Sequence | Increasing | Decreasing | Random |
| --------------------- | ---------- | ---------- | ------ |
| 10                    |      0.001 ms      |     0.001 ms       |    0.001 ms    |
| 100                   |       0.001 ms     |      0.012 ms      |    0.007 ms    |
| 1,000                 |      0.003 ms      |     1.124 ms       |     0.570 ms   |
| 100,000               |       0.318 ms     |      11.444 s      |   5.762 s     |

## Bubble Sort Performance Analysis

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### Best Case (Increasing Order)

The best case occurs when the input is already sorted. In this case, Bubble Sort has a linear time complexity of O(n), where n is the size of the input. This is because the algorithm only needs to traverse the list once and doesn't need to make any swaps. However, your data shows that the time taken increases exponentially with the size of the input, which is not what we would expect for the best case.

### Worst Case (Decreasing Order)

The worst case occurs when the input is sorted in reverse order. Here, Bubble Sort has a quadratic time complexity of O(n^2), as it must compare and swap every element in the list for each element in the list. Your data seems to align with this expectation, as the time taken increases significantly with the size of the input.

### Average Case (Random Order)

On average, Bubble Sort also has a time complexity of O(n^2), as it is likely to make a significant number of swaps for randomly ordered input. Your data seems to align with this expectation as well.

## Insertion Sort Performance Analysis

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

### Best Case (Increasing Order)

The best case occurs when the input is already sorted. In this case, Insertion Sort has a linear time complexity of O(n), where n is the size of the input. This is because the algorithm only needs to traverse the list once and doesn't need to make any swaps. Your data seems to align with this expectation, as the time taken increases linearly with the size of the input.

### Worst Case (Decreasing Order)

The worst case occurs when the input is sorted in reverse order. Here, Insertion Sort has a quadratic time complexity of O(n^2), as it must compare and swap every element in the list for each element in the list. Your data seems to align with this expectation, as the time taken increases significantly with the size of the input.

### Average Case (Random Order)

On average, Insertion Sort also has a time complexity of O(n^2), as it is likely to make a significant number of swaps for randomly ordered input. Your data seems to align with this expectation as well.

## Merge Sort Performance Analysis

Merge Sort is an efficient, stable sorting algorithm that works by dividing the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining.

### Best Case (Increasing Order)

The best case occurs when the input is already sorted. In this case, Merge Sort has a time complexity of O(n log n), where n is the size of the input. This is because the algorithm will still divide the list into individual elements and then merge them back together in sorted order. Your data seems to align with this expectation, as the time taken increases logarithmically with the size of the input.

### Worst Case (Decreasing Order)

The worst case occurs when the input is sorted in reverse order. Here, Merge Sort also has a time complexity of O(n log n), as it must still divide the list and then merge it back together. Your data seems to align with this expectation, as the time taken increases logarithmically with the size of the input.

### Average Case (Random Order)

On average, Merge Sort has a time complexity of O(n log n), as it is likely to make a significant number of comparisons and swaps for randomly ordered input. Your data seems to align with this expectation as well.

## Quick Sort Performance Analysis

Quick Sort is an efficient, comparison-based sorting algorithm that uses divide-and-conquer to sort elements. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

### Best Case (Increasing Order)

The best case occurs when the pivot always divides the array into two halves which leads to a time complexity of O(n log n), where n is the size of the input. However, your data shows that the time taken increases exponentially with the size of the input, which is not what we would expect for the best case.

### Worst Case (Decreasing Order)

The worst case occurs when the pivot is the smallest or largest element in the array. Here, Quick Sort has a quadratic time complexity of O(n^2), as it must compare and swap every element in the list for each element in the list. Your data seems to align with this expectation, as the time taken increases significantly with the size of the input.

### Average Case (Random Order)

On average, Quick Sort has a time complexity of O(n log n), as it is likely to make a significant number of comparisons and swaps for randomly ordered input. Your data seems to align with this expectation as well.

## Selection Sort Performance Analysis

Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input into a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest, depending on the ordering) element from the unsorted region and moves it to the sorted region, until the unsorted region is empty.

### Best Case (Increasing Order)

The best case occurs when the input is already sorted. In this case, Selection Sort has a quadratic time complexity of O(n^2), where n is the size of the input. This is because the algorithm still needs to traverse the list for each element to confirm that it is in the correct position. Your data seems to align with this expectation, as the time taken increases significantly with the size of the input.

### Worst Case (Decreasing Order)

The worst case occurs when the input is sorted in reverse order. Here, Selection Sort also has a quadratic time complexity of O(n^2), as it must compare and swap every element in the list for each element in the list. Your data seems to align with this expectation, as the time taken increases significantly with the size of the input.

### Average Case (Random Order)

On average, Selection Sort also has a time complexity of O(n^2), as it is likely to make a significant number of comparisons and swaps for randomly ordered input. Your data seems to align with this expectation as well.
