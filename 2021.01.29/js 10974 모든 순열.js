const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString());

// const N = 3;

solution();

function solution() {
    const numbers = [];
    for (let i = 0; i < N; i++) {
        numbers[i] = i + 1;
    }
    
    let answer = '';
    const seen = new Array(N);
    const permutation = [];

    dfs(0);
    console.log(answer);

    function dfs(depth) {
        if (depth === N) {
            answer += permutation.join(' ') + '\n';
            return;
        }

        for (let i = 0; i < N; i++) {
            if (seen[numbers[i]]) continue;
            permutation.push(numbers[i]);
            seen[numbers[i]] = true;
            dfs(depth + 1);
            permutation.pop();
            seen[numbers[i]] = false;
        }
    }
}