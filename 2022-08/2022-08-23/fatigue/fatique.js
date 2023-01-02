

function solution(n, works) {
  let answer = 0;
  works.sort((a, b) => b - a);

  while (n > 0) {
    let diffFlag = false;

    // 차이가 있는 경우
    for (let i = 0; i < works.length - 1; i++) {
      if (n === 0) break;
      const diff = Math.abs(works[i] - works[i + 1]);

      if (diff > 0 && n > 0) {
        diffFlag = true;
        works[i] > works[i + 1] ? works[i]-- : works[i + 1]--;
        n--;
        break;
      }
    }

    // 차이가 없는 경우
    if (!diffFlag) {
      if (works[0] === 0) break;
      const quotient = Math.floor(n / works.length);

      if (works[0] <= quotient) {
        works = works.map((work) => 0);
        break;
      }

      let remainder = n % works.length;
      works = works.map((work) => {
        const minus = remainder > 0 ? quotient + 1 : quotient;
        if (remainder > 0) remainder--;
        return work - minus;
      });
      n = 0;
    }
  }

  works.forEach((time) => (answer += Math.pow(time, 2)));
  return answer;
}
