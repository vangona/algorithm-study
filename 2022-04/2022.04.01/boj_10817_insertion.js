// 10817번 세 수

const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

insertionSort(numbers);
console.log(numbers[1]);

function insertionSort (numbers) {
  for (let i = 1; i < numbers.length; i++) {
    // 삽입할 수를 고름
    const currNum = numbers[i];
    let index = i;

    // 삽입될 위치가 0보다 크고, 
    // 숫자가 왼쪽 숫자보다 작을때까지 반복
    while (index > 0 && currNum < numbers[index - 1]) {
      // 현재의 숫자가 앞 숫자보다 크면 한 칸씩 이동
      numbers[index] = numbers[index - 1];
      index--; 
    }

    // 최종 index 위치에 숫자를 삽입
    numbers[index] = currNum;
  }
}