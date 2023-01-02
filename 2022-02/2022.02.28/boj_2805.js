// 2805번 나무 자르기

// const fs = require('fs');
// let [numbers, trees] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, trees] = ['5 20', '4 42 40 26 46'];

const [N, M] = numbers.split(' ').map(el => el * 1);
trees = trees.split(' ').map(el => el * 1);

let min = 1;
let max = Math.max(...trees);
let answer = 0;

while(min <= max) {
    let mid = Math.floor((min + max) / 2);
    let length = 0; 

    trees.forEach(tree => {
      if (tree - mid > 0) {
        length += (tree - mid);
      } 
    })

    if (length >= M) {
      if (answer < mid) answer = mid;
      min = mid + 1;
    } else {
        max = mid - 1;
    }

    length = 0;
}

console.log(answer);