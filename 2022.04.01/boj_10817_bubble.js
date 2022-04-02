// 10817번 세 수

// const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

const numbers = [10, 2, 3];

bubbleSort(numbers);
console.log(numbers);

function bubbleSort (numbers) {
  const ARR_LENGTH = numbers.length;
  for (let i = 0; i < ARR_LENGTH; i++) {
    for (let j = 0; j < ARR_LENGTH - i; j++) {
      if (j + 1 < ARR_LENGTH && numbers[j] > numbers[j + 1]) {
        const swap = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = swap;
      }
    }
  }
}