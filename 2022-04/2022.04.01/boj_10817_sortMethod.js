// 10817번 세 수

const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

numbers.sort((a, b) => a - b);

console.log(numbers[1]);