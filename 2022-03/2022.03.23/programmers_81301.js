// 프로그래머스 카카오 채용 연계 인턴십 숫자 문자열과 영단어

console.log(solution("2three45sixseven"));

function solution(s) {
  var answer = 0;

  if (parseInt(s) === s * 1) {
    return s * 1;
  }

  answer = convertStr(s.split('')) * 1;
  return answer;
}

function convertStr(str) {
  let convertedStr = '';
  let characterLength = 1;
  
  for (let i = 0; i < str.length; i += characterLength) {
    characterLength = 1;

    if (str[i].charCodeAt() >= 97) {
      // 소문자
      characterLength = convertCharacter(str, i);
    } else {
      // 숫자
      convertedStr += str[i];
    }
  }

  return convertedStr;

  function convertCharacter(str, index) {
    const character = str[index];
  
    const characterTable = {
      'z' : {
        number: '0',
        characterLegnth: 4,
      },
      'o' : {
        number: '1',
        characterLegnth: 3,
      },
      'e' : {
        number: '8',
        characterLegnth: 5,
      },
      'n' : {
        number: '9',
        characterLegnth: 4,
      },
    }
  
    switch (character) {
      case 't' :
        if (str[index + 2] === 'o') {
          convertedStr += '2';
          return 3;
        } else {
          convertedStr += '3';
          return 5;
        }
      case 'f' :
        if (str[index + 3] === 'r') {
          convertedStr += '4';
          return 4;
        } else {
          convertedStr += '5';
          return 4;
        }
      case 's' :
        if (str[index + 2] === 'x') {
          convertedStr += '6';
          return 3;
        } else {
          convertedStr += '7';
          return 5;
        }
      default :
        convertedStr += characterTable[character].number;
        return characterTable[character].characterLegnth;
    }
  }
}