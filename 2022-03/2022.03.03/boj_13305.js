// 13305번 주유소

// const fs = require('fs');
// let [N, distances, prices] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, distances, prices] = ['4', '2 3 1', '5 2 4 1'];

N = N * 1;
distances = distances.split(' ').map(el => BigInt(el));
prices = prices.split(' ').map(el => BigInt(el));

let minPrice = prices[0];
let cost = BigInt(0);

for (let i = 0; i < N - 1; i++) {
  // 현재까지의 가격 중 가장 저렴한 곳의 가격을 더해준다.
  cost += minPrice * distances[i];
  // 다음 주유소가 더 저렴하면, 다음 주유소부터는 그 주유소의 가격으로 주유한다. 더 저렴한 주유소가 나올때까지 반복된다.
  if (minPrice > prices[i + 1]) minPrice = prices[i + 1];
}

console.log(String(cost));