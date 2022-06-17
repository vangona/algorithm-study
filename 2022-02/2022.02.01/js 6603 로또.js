// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['7 1 2 3 4 5 6 7', '8 1 2 3 5 8 13 21 34', '0'];

main();

function main() {
    let i = 0;
    let answer = '';
    while (input[i] !== '0') {
        const [k, ...S] = input[i].split(' ').map(el => parseInt(el));
        console.log(k, S);
        const output = lotto(k, S);
        answer += output + '\n';
        i++
    }
    console.log(answer);
}

function lotto(k, S) {
    let permutation = [];
    let permutations = [];
    let seen = new Array(k);

    dfs(0);
    return permutations.join('\n');

    function dfs(depth) {
        if (depth === 6) {
            permutation.sort((a, b) => a - b);
            if (permutations.indexOf(permutation.join(' ')) === -1) {
                permutations.push(permutation.join(' '));
            }
            return;
        }

        for (let i = 0; i < k; i++) {
            if (seen[i]) continue;
            permutation.push(S[i]);
            seen[i] = true;
            dfs(depth + 1);
            permutation.pop();
            seen[i] = false;
        }
    }
    
}