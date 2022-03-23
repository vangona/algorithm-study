// 2020 KAKAO BLINE TEST 문자열 압축

console.log(solution("ababcdcdababcdcd"));

// 풀이 함수
function solution(s) {
  // 최솟값을 출력하기 위해 최대값 입력
  var answer = s.length + 1;

  // 예외 처리 
  // s의 길이가 3이하이면, 압축 무의미
  if (s.length < 4) {
    return s.length;
  }

  // 문자열의 길이 / 2까지가 반복 문자열의 최대 길이
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    // chunkSubstr : 입력된 문자열을 반복 길이에 맞춰 나누고,
    // compresStr : 나눠진 배열을 통해 압축.
    const compressedLength = compressStr(chunkSubstr(s, i));
    // 압축된 문자열의 길이를 최소 비교
    if (answer > compressedLength) answer = compressedLength;
  }

  // 정답 반환
  return answer;
}

// 분할 크기에 맞춰 문자열 분할 함수
function chunkSubstr(str, size) {
  // 분할 크기에 맞추어 배열 선언
  const chunkNums = Math.ceil(str.length / size);
  const chunks = new Array(chunkNums);

  // substr을 사용하여 분할 크기에 맞게 문자열 분할
  for (let i = 0, j = 0; i < chunkNums; i++, j += size) {
    if (str.length - j < size) {
      chunks[i] = str.substr(j, str.length);
    } else {
      chunks[i] = str.substr(j, size);
    }
  }

  // 분할된 문자열 배열 반환
  return chunks;
}

// 문자열 압축 함수
function compressStr(str) {
  // 변수 선언
  let compressedStr = "";
  let repeatStr = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === repeatStr) {
      // 문자열이 현재의 반복 문자열과 같으면,
      // 계수하고 다음 문자열로 넘어감
      count++;
    } else {
      // 문자열이 현재의 반복 문자열과 다르면,
      // 압축 문자열에 추가함
      if (count > 1) {
        // 계수가 1이상이면(문자열 여러 번 반복), 
        // count와 함께 추가
        compressedStr += count + repeatStr;
      } else {
        // 계수가 1이면(반복 없음), 
        // 반복 문자열만 추가
        compressedStr += repeatStr;
      }

      // 문자열이 다르기 때문에
      // 반복 문자열을 현재의 문자열로 변경해주고,
      // 계수를 초기화해준다.
      repeatStr = str[i];
      count = 1;
    }
  }

  if (count > 1) {
    compressedStr += count + repeatStr;
  } else {
    compressedStr += repeatStr;
  }

  return compressedStr.length;
}