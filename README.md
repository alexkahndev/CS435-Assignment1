# CS 435-102 Programming Assignment 1
**Alex Kahn**  
📧 ak2534@njit.edu

## Objective
Implement and compare different types of sorting algorithms:

- Bubble Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Selection Sort

## Test Input Sizes
- 10
- 100
- 1,000
- 100,000

## Test Input Sequences
- Increasing
- Decreasing
- Random

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
| Sorting Algorithm | Size 10 | Size 100 | Size 1,000 | Size 100,000 |
| ----------------- | ------- | -------- | ---------- | ------------ |
| Bubble Sort       |         |          |            |              |
| Insertion Sort    |         |          |            |              |
| Merge Sort        |         |          |            |              |
| Quick Sort        |         |          |            |              |
| Selection Sort    |         |          |            |              |


