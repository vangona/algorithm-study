// 1654번 랜선 자르기

// const fs = require('fs');
// let [numbers, ...wires] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...wires] = ['4 11', '802', '743', '457', '539']

const [k, n] = numbers.split(' ').map(el => el * 1);
wires = wires.map(el => el * 1);

let min = 1;
let max = Math.max(...wires);
let answer = 0;

while(min <= max) {
  let mid = Math.floor((max + min) / 2);
  let wireCount = 0;
  wires.forEach(wire => wireCount += parseInt(wire / mid));   

  if (wireCount >= n) {
    if (answer < mid) answer = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }

  wireCount = 0;
}

console.log(answer);