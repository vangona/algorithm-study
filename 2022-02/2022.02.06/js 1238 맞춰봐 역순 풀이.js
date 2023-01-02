// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['4', '-+0++++--+'];

let [N, lines] = input;

N = N * 1;
lines = lines.split('');

let signs = new Array(N);
for (let i = 0; i < N; i++) {
    signs[i] = [];
    for (let j = 0; j <= i; j++) {
        signs[i].push(lines.pop());
    }
    signs[i].reverse();
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
        answer = permutation.reverse().join(' ');
        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (answer) return; 

        let sum = numbers[i];
        if (!checkRule(sum, depth, 0)) continue;

        // 해당 수열이 조건에 맞는지 확인한다. (백트래킹)
        let isRule = true;
        for (let j = 1; j <= depth; j++) {
            sum += permutation[depth - j];
            if (!checkRule(sum, depth, j)) {
                isRule = false;
                break;
            }
        }

        if (isRule) {
            permutation.push(numbers[i]);
            dfs(depth + 1);
            permutation.pop();
        } else {
            continue;
        }     
    }
}

function checkRule(sum, depth, index) {
    if (signs[depth][index] === '+') {
        if (sum <= 0) {
            return false;
        } else {
            return true;
        }
    }

    if (signs[depth][index] === '0') {
        if (sum !== 0) {
            return false;
        } else {
            return true;
        }
    }

    if (signs[depth][index] === '-') {
        if (sum >= 0) {
            return false;
        } else {
            return true;
        }
    }
}