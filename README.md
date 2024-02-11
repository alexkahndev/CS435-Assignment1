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





