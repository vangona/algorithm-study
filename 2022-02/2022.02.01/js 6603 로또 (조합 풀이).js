const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

main();

function main() {
    let i = 0;
    let answer = '';
    while (input[i] !== '0') {
        const [k, ...S] = input[i].split(' ').map(el => parseInt(el));
        const output = getCombinations(6, S).map(line => line.join(' '));
        console.log(output.join('\n') + '\n');
        i++;
    }
    console.log(answer);
}

function getCombinations(selectNumber, arr) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(selectNumber - 1, rest);
        const attached = combinations.map((el) => [fixed, ...el]);
        results.push(...attached);
    })

    return results;
}