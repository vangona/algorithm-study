// const fs = require('fs');
// let [N, ...counsels] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['10', '5 50', '4 40', '3 30', '2 20', '1 10', '1 10', '2 20', '3 30', '4 40', '5 50'];

let [N, ...counsels] = input;

N = parseInt(N);
counsels = counsels.map(line => line.split(' ').map(el => parseInt(el)));

const profits = [];

dfs(0, 0);
console.log(Math.max(...profits));

function dfs(depth, profit) {
    if (depth === N) {
        profits.push(profit);
        return;
    }

    for (let i = depth; i < N; i++) {
        if (i + counsels[i][0] > N) {
            dfs(N, profit);
        } else {
            profit += counsels[i][1];
            dfs(i + counsels[i][0], profit);
            profit -= counsels[i][1];
        }
    }
}