const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...stats] = input;
stats = stats.map(line => line.split(' ').map(el => parseInt(el)));

let visited = new Array(N);
let startTeam = [];
let linkTeam = [];
let diffMin = 10000;

dfs(0, 0);
console.log(diffMin);

function dfs(depth, prev) {
    if (depth === N / 2) {
        makeLinkTeam(startTeam);
        const startStats = getStatSum(startTeam);
        const linkStats = getStatSum(linkTeam);
        const diff = Math.abs(startStats - linkStats);
        if (diffMin > diff) diffMin = diff; 
        linkTeam = [];
        return;
    }

    for (let i = prev; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        startTeam.push(i);
        dfs(depth + 1, i);
        visited[i] = false;
        startTeam.pop();
    }
}

function makeLinkTeam(startTeam) {
    for (let i = 0; i < N; i++) {
        if (startTeam.includes(i)) continue;
        linkTeam.push(i);
    }
}

function getStatSum(team) {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            if (i === j) continue;
            sum += stats[team[i]][team[j]];
        }
    }
    return sum;
}