// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['5 0', '-7 -3 -2 5 8'];

const [N, S] = input[0].split(' ').map(el => parseInt(el));
const numbers = input[1].split(' ').map(el => parseInt(el));

let visited = new Array(N);
let answer = 0;
let permutation = [];
let sum = 0;

dfs(0, 0);
console.log(answer);

function dfs(depth, prev) {
    if (depth === N) {
        return;
    }

    for (let i = prev; i < N; i++) {
        if (visited[i]) continue;
        permutation.push(numbers[i]);
        sum += numbers[i];
        visited[i] = true;
        if (sum === S) {
            answer += 1;
        } 
        dfs(depth + 1, i);
        permutation.pop();
        sum -= numbers[i];
        visited[i] = false;
    }
}