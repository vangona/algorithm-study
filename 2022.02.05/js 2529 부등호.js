// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['2', '< >'];


let [k, signs] = input;

k = parseInt(k);
signs = signs.split(' ');

const numbers = new Array(10);
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i;
}

let visited = new Array(10);
let maxNum = 0;
let maxNumStr = '';
let minNum = 10000000000;
let minNumStr = '';
let number = [];

dfs(0, 0);

const answer = maxNumStr + '\n' + minNumStr;

console.log(answer);

function dfs(depth, prev) {
    if (number.length === k + 1) {
        intNumber = parseInt(number.join(''))
        if (minNum > intNumber) {
            minNum = intNumber;
            minNumStr = number.join('');
        }
        if (maxNum < intNumber) {
            maxNum = intNumber;
            maxNumStr = number.join('');
        } 
        return;
    }

    if (depth === 0) {
        for (let i = 0; i < 10; i++) {
            number.push(i);
            visited[i] = true;
            dfs(depth + 1, i);
            number.pop();
            visited[i] = false;
        }        
    }

    if (signs[depth - 1] === '<') {
        for (let i = prev + 1; i < 10; i++) {
            if (visited[i]) continue;
            number.push(i);
            visited[i] = true;
            dfs(depth + 1, i);
            number.pop();
            visited[i] = false;
        }
    }

    if (signs[depth - 1] === '>') {
        for (let i = prev - 1; i >= 0; i--) {
            if (visited[i]) continue;
            number.push(i);
            visited[i] = true;
            dfs(depth + 1, i);
            number.pop();
            visited[i] = false;
        }
    }
}