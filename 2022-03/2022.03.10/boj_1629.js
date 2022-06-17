// 1629번 곱셈

// const fs = require('fs');
// const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => BigInt(el));

const [A, B, C] = ['10', '11', '12'].map(el => BigInt(el));

const answer = divideConquer(A, B, C);
console.log(String(answer));

function divideConquer(base, exponent, divider) {
  if (base == 1) return 1;
  if (exponent == 1) {
    return base % divider;
  } else {
      const dividedNumber = divideConquer(base, BigInt(parseInt(exponent / BigInt(2))), divider);
    if (exponent % BigInt(2) == 0) {    
      return (dividedNumber * dividedNumber) % divider;
    } else {
      return (dividedNumber * dividedNumber * base) % divider;
    }
  }
} 