// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['1', '1 1', '1 1'];

const T = input[0] * 1;

let count = 0;
let line = 1;
let nodes;
let edges;
let side;
const answer = new Array(T).fill('YES');

while (count < T) {
    const [V, E] = input[line].split(' ').map(el => el * 1);
    makeGraph(V, E);  
}

console.log(answer.join('\n'));

function makeGraph(V, E) {
    nodes = V;
    edges = new Array(V + 1);
    for (let i = 1; i <= V; i++) {
        edges[i] = [];
    }
    side = new Array(V + 1);     

    for (let i = line + 1; i <= line + E; i++) {
        const currLine = input[i].split(' ').map(el => el * 1);
        edges[currLine[0]].push(currLine[1]);
        edges[currLine[1]].push(currLine[0]);
    }

    if (V === 2 && E === 1) {
        answer[count] = 'NO';
    } else if(V === 1) {
        answer[count] = 'NO';
    } else {
        for (let i = 1; i <= V; i++) {
            if (answer[count] === 'NO') {
                break;
            }

            if (!side[i]) {
                dfs(i, '');
            }
        }
    }

    count++;
    line += E + 1;
}

function dfs(index, prev) {
    if (side[index]) {
        if (side[index] === prev) {
            answer[count] = 'NO';    
            return;
        }

        return;
    }

    let position = 'left';
    if (prev === 'left') position = 'right';
    side[index] = position;

    for (let i = 0; i < edges[index].length; i++) {
        if (edges[index][i] === index) continue;
        dfs(edges[index][i], position);
    }
}