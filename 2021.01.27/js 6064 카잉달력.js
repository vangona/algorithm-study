const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const input = ['3', '10 12 3 9', '10 12 7 2', '13 11 5 6'];

main();

function main() {
    const T = parseInt(input[0]);
    let answer = '';

    for (let i = 1; i <= T; i++) {
        answer += solution(input[i]) + '\n';
    }

    console.log(answer);
}

function solution(line) {
    const input = line.split(' ').map(el => parseInt(el));
    
    const [N, M, x, y] = input;
    const lastday = lcm(N, M);

    let count = x;
    while (true) {

        if (y === M) {
            if (count % M === 0) {
                break;
            }
        } else {
            if (count % M === y ) {
                break;
            }
        }

        if (count > lastday) {
            count = -1;
            break;
        }

        count += N;
    }

    return count.toString();
}

function lcm(x, y) {
    return (x * y) / gcdCycle(x, y);
}

function gcdCycle(x, y) {
    if (y === 0) return x;
    return x > y ? gcdCycle(y, x % y) : gcdCycle(x, y % x);
}