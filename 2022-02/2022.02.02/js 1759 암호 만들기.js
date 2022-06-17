// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['4 6', 'a t c i s w'];

const [L, C] = input[0].split(' ').map(el => parseInt(el));
const alphabats = input[1].split(' ');
alphabats.sort();

let password = [];
let visited = new Array(C);
let answer = '';
let consonantsCnt = 0;
let vowelsCnt = 0;

dfs(0, 0);
console.log(answer);

function dfs(depth, prev) {
    if (depth === L) {
        if (vowelsCnt > 0 && consonantsCnt > 1) {
            password.sort();
            answer += password.join('') + '\n';    
        }
        return;
    }

    for (let i = prev; i < C; i++) {
        if (visited[i]) continue;
        password.push(alphabats[i]);
        plusAlphabatCnt(alphabats[i]);
        visited[i] = true;
        dfs(depth + 1, i);
        password.pop();
        minusAlphabatCnt(alphabats[i]);
        visited[i] = false;
    }
}

function plusAlphabatCnt(alphabat) {
    if (alphabat === 'a' || alphabat === 'e' || alphabat === 'i' || alphabat === 'o' || alphabat === 'u') {
        vowelsCnt++;
    } else {
        consonantsCnt++;
    }
}

function minusAlphabatCnt(alphabat) {
    if (alphabat === 'a' || alphabat === 'e' || alphabat === 'i' || alphabat === 'o' || alphabat === 'u') {
        vowelsCnt--;
    } else {
        consonantsCnt--;
    }
}