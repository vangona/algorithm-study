// 통계학

// const fs = require('fs');
// let [n, ...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el * 1);

let [n, ...numbers] = ['1', '4000'].map(el => el * 1);

numbers.sort((a, b) => a - b);
let answer = '';
answer += getMean(numbers) + '\n';
answer += getMedian(numbers) + '\n';
answer += getMode(numbers) + '\n';
answer += getRange(numbers);

console.log(answer);

function getMean(numbers) {
    const sum = numbers.reduce((curr, acc) => curr + acc);
    return Math.round(sum / numbers.length);
}

function getMedian(numbers) {
    if (numbers.length === 1) return numbers[0];
    
    return numbers[Math.floor(numbers.length / 2)];
}

function getMode(numbers) {
    let freqArr = new Array(8001).fill(0);

    for (let i = 0; i < numbers.length; i++) {
        freqArr[numbers[i] + 4000]++;
    }

    let modeCount = Math.max(...freqArr);

    let modeArr = [];
    freqArr.forEach((count, number) => {
        if (count === modeCount) modeArr.push(number - 4000);
    })
    
    return modeArr.length > 1 ? modeArr[1] : modeArr[0];
}

function getRange(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
}