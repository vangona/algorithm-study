// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['5', '5 4 3 2 1'];

main();

function main() {
    const N = parseInt(input[0]);
    let numbers = input[1].split(' ').map(el => parseInt(el));

    const answer = solution(N, numbers);
    console.log(answer);
}

function solution(N, numbers) {
    let index = -1;
    let tempArr = [];

    for (let i = N - 1; i > 0; i--) {
        tempArr.push(numbers[i]);
        if (numbers[i - 1] > numbers[i]) {
            index = i - 1;
            break;
        }
    }

    if (index === -1) {
        return index;
    }

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] < numbers[index]) {
            let temp = tempArr.splice(i, 1, numbers[index]);
            numbers[index] = temp;
            break;
        }
    }

    numbers.splice(index + 1, tempArr.length, ...tempArr);

    return numbers.join(' ');
}