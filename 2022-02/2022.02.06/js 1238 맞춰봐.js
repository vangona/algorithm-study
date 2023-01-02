// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['4', '-+0++++--+'];

let [N, lines] = input;

N = N * 1;
lines = lines.split('');

let signs = new Array(N);
for (let i = 0; i < N; i++) {
    signs[i] = [];
    for (let j = i; j < N; j++) {
        signs[i][j] = lines.shift();
    }
}

const numbers = new Array(21);
for (let i = 0; i < 21; i++) {
    numbers[i] = i - 10;
}

let permutation = [];
let answer = '';

dfs(0);
console.log(answer);

// depth = 수열에 들어가 있는 수의 갯수 수열의 길이가 N이 되면, 탐색을 종료한다.
function dfs(depth) {
    if (depth === N) {
        answer = permutation.join(' ');
        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (answer) return; 
        if (!numberCheck(numbers[i], depth)) continue;

        permutation.push(numbers[i]);
        if (checkRule(permutation, depth)) dfs(depth + 1);
        permutation.pop();
    }
}

function numberCheck(number, depth) {
    let result = true;
    if (signs[depth][depth] === '+') {
        if (number <= 0) {
            result = false;
        }
    }

    if (signs[depth][depth] === '0') {
        if (number !== 0) {
            result = false;
        }
    }

    if (signs[depth][depth] === '-') {
        if (number >= 0) {
            result = false;
        }
    }
    return result;
}

function checkRule(permutation, depth) {
    let sum = 0;
    let result = true;
    for (let i = depth; i >= 0; i--) {
        sum += permutation[i];
        if (signs[i][depth] === '+') {
            if (sum <= 0) {
                result = false;
                break;
            }
        }
    
        if (signs[i][depth] === '0') {
            if (sum !== 0) {
                result = false;
                break;
            }
        }
    
        if (signs[i][depth] === '-') {
            if (sum >= 0) {
                result = false;
                break;
            }
        }
    }
    return result;
}