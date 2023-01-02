// const fs = require('fs');
// let [N, numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, numbers] = ['6', '20 1 15 8 4 10'];

main();

function main() {
    N = parseInt(N);
    numbers = numbers.split(' ').map(el => parseInt(el));

    solution(N, numbers);
}

function solution(N, numbers) {
    let max = 0;
    let result = 0;
    let seen = new Array(N);

    dfs(0, 0);
    console.log(max);

    function dfs(depth, curr) {
        if (depth === N) {
            if (max < result) max = result;
            return;
        }

        for (let i = 0; i < N; i++) {
            if (seen[i]) continue;
            if (depth === 0) {
                seen[i] = true;
                dfs(depth + 1, numbers[i]);
                seen[i] = false;
            } else {
                result +=  Math.abs(numbers[i] - curr);
                seen[i] = true;
                dfs(depth + 1, numbers[i]);
                result -= Math.abs(numbers[i] - curr);
                seen[i] = false;
            }
        }
    }
}