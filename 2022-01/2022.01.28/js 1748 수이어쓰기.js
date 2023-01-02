const fs = require('fs');
let N = parseInt(fs.readFileSync('/dev/stdin').toString());

solution();

function solution () {
    let count = 0;
    let expo = 0;
    
    while(N >= 10 ** expo) {
        count += N - 10 ** expo + 1;
        expo++;
    }
    
    console.log(count);
}