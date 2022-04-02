// 10817번 세 수

// const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

const numbers = [1, 20, 30, 1100, 10];

selectionSort(numbers);
console.log(numbers);

function selectionSort (numbers) {
  const ARR_LENGTH = numbers.length;
  for (let i = 0; i < ARR_LENGTH; i++) {
    let min = i;
    for (let j = i; j < ARR_LENGTH; j++) {
      if (numbers[i] > numbers[j]) {
        min = j;
      }
    }

    const swap = numbers[i];
    numbers[i] = numbers[min];
    numbers[min] = swap;
  }
}