# 알고리즘 공부

[![Solved.ac Profile](http://mazassumnida.wtf/api/v2/generate_badge?boj=yummygona)](https://solved.ac/yummygona/)

문제 풀이를 중심으로 했던 알고리즘 공부.  
컴퓨터 공학을 더 익히고 다시 풀이하려 한다.

## 최근 풀이

### 1063번 킹

```js
// 입력 값 처리 부분
const fs = require("fs");
let [chessPieces, ...commands] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

chessPieces = chessPieces.split(" ");
const N = chessPieces.pop();

solveProblem();

function solveProblem() {
  // 이동을 숫자의 증감으로 표현할 수 있도록
  // 열을 숫자로 변환함.
  chessPieces = positionToAscii(chessPieces);

  // 명령 배열을 돌며 명령 수행
  commands.forEach((command) => {
    chessPieces = handleCommand(chessPieces, command);
  });

  // 출력을 위해 다시 체스 포지션 문자열로 변경
  chessPieces = asciiToPosition(chessPieces);

  // 결과 출력
  console.log(chessPieces.join("\n"));
}

// 명령 수행
// @chessPieces {Array}: king, stone의 위치 정보를 담은 이차원 배열
// @command {String}: 명령 문자열
// @return {Array}: king, stone의 위치 정보를 담고 있는 이차원 배열
function handleCommand(chessPieces, command) {
  let [king, stone] = chessPieces;

  // king 이동.
  king = moveChessPiece(king, command);
  if (king[0] === stone[0] && king[1] === stone[1]) {
    // king과 store의 위치가 같으면,
    // stone도 이동시킴.
    stone = moveChessPiece(stone, command);
  }

  // 두 말의 위치가 보드 내에 있다면,
  // 변경된 위치 정보 반환
  if (checkPosition(...king) && checkPosition(...stone)) return [king, stone];

  // 두 말의 위치가 보드 밖에 있다면,
  // 변경전 위치 정보 반환
  return chessPieces;
}

// 체스말 이동 함수
// @chessPiece {Array} : 이동할 체스말 위치 정보
// @command {String}: 명령 문자열
function moveChessPiece(chessPiece, command) {
  let [movedColumn, movedRow] = chessPiece;

  switch (command[0]) {
    case "R":
      movedColumn++;
      break;
    case "L":
      movedColumn--;
      break;
    case "T":
      movedRow++;
      break;
    case "B":
      movedRow--;
      break;
  }

  if (command[1]) {
    switch (command[1]) {
      case "T":
        movedRow++;
        break;
      case "B":
        movedRow--;
        break;
    }
  }

  return [movedColumn, movedRow];
}

// 위치 확인 함수
// 체스말의 위치가 보드 내에 있는지 확인
// @column, row {String}: 체스말 열, 행 정보
// @return {Boolean}
function checkPosition(column, row) {
  if (column >= 65 && column <= 72 && row >= 1 && row <= 8) return true;

  return false;
}

// 체스판 위치 => 아스키코드 변환 함수
// @return {Array} : 아스키코드로 변환된 king, stone의 위치 정보 이차원 배열
function positionToAscii(chessPieces) {
  chessPieces = chessPieces.map((chessPiece) => {
    chessPiece = chessPiece.split("");
    chessPiece[0] = chessPiece[0].charCodeAt();
    chessPiece[1] = chessPiece[1] * 1;

    return chessPiece;
  });

  return chessPieces;
}

// 아스키코드 => 체스판 위치 변환 함수
// @return {Array} : 문자열로 변환된 king, stone의 위치 정보 배열
function asciiToPosition(chessPieces) {
  chessPieces = chessPieces.map((chessPiece) => {
    chessPiece[0] = String.fromCharCode(chessPiece[0]);
    chessPiece[1] = chessPiece[1] * 1;

    return chessPiece.join("");
  });

  return chessPieces;
}
```
