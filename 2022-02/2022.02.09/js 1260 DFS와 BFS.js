// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let input = ['1000 1 1000', '999 1000'];

const [N, M, V] = input[0].split(' ').map(el => el * 1);

input = input.map(line => line.split(' ').map(el => el * 1));

const edges = new Array(N + 1);

for (let i = 0; i <= N; i++) {
    edges[i] = [];
}

for (let i = 1; i <= M; i++) {
    edges[input[i][0]].push(input[i][1]);
    edges[input[i][1]].push(input[i][0]);
}

for (let i = 0; i <= N; i++) {
    edges[i].sort((a, b) => a - b);
}

let dfsTravel = [];
let bfsTravel = [];

class Graph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
        this.visited = [];
        this.needVisit = [];
    }

    dfs(node) {
        this.visited[node] = true;

        dfsTravel.push(node);

        for (let i = 0; i < edges[node].length; i++) {
            if (this.visited[edges[node][i]])continue;
            this.dfs(edges[node][i]);
        }
    }

    bfs(node) {
        this.visited[node] = true;
        this.needVisit = edges[node];

        bfsTravel.push(node);

        let toGo;
        while(this.needVisit.length > 0) {
            toGo = this.needVisit.shift();
            if (this.visited[toGo]) continue;

            this.visited[toGo] = true;
            bfsTravel.push(toGo);

            for (let i = 0; i < edges[toGo].length; i++) {
                if (this.visited[edges[toGo][i]]) continue;

                this.needVisit.push(edges[toGo][i]);
            }
        }
    }
}

const dfsGraph = new Graph(N, edges, V);
const bfsGraph = new Graph(N, edges, V);
dfsGraph.dfs(V);
bfsGraph.bfs(V);

const answer = dfsTravel.join(' ') + '\n' + bfsTravel.join(' ');

console.log(answer);