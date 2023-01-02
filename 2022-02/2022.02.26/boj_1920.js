// 1920번 수 찾기

// input 처리하기
// const fs = require('fs');
// let [N, A, M, numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, A, M, numbers] = ['5', '4 1 5 2 3', '5', '1 3 7 9 5'];

solution(N, A, M, numbers);

function solution (N, A, M, numbers) {

  N = N * 1;
  A = A.split(' ').map(el => el * 1);
  M = M * 1;
  numbers = numbers.split(' ').map(el => el * 1);

  // 이분탐색을 위해 배열을 정렬함.
  A.sort((a, b) => a - b);

  let answer = '';

  // 반복문을 통해서 답안에 이분탐색 결과 저장
  for (let i = 0; i < M; i++) {
    const result = binarySearch(numbers[i], A);
	  answer += result + '\n';
  }

  // 결과 출력
  console.log(answer);
}

// 이분탐색 함수
function binarySearch(target, array) {
	let lower = 0;
	let upper = array.length - 1;

	while (true) {
		const mid = Math.floor((lower + upper) / 2);

		// 찾았으면 1을 반환
		if (array[mid] === target) return 1;
		// 위와 아래의 경계값이 같으면 탐색 종료
		if (lower >= upper) return 0;

		// 둘 다 아니면 탐색 범위 변경
		if (array[mid] < target){
			lower = mid + 1;
		} else {
			upper = mid - 1;
		}
	}
}