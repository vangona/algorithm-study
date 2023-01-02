function solution(survey, choices) {
  let answer = "";
  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.forEach((choice, i) => {
    if (choice > 4) {
      result[survey[i][1]] += choice - 4;
    } else if (choice < 4) {
      result[survey[i][0]] += 4 - choice;
    }
  });

  const types = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  types.forEach((type) => {
    answer += result[type[0]] >= result[type[1]] ? type[0] : type[1];
  });

  return answer;
}
