console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));

function solution(info, query) {
  var answer = [];
    
  query = query.map(line => {
    let modifiedLine = Array.from({ length: 5 });
    const data = line.split(' ')
      .map(condition => condition.trim());
    const codeScore = data.pop();
    const applicantInfo = data.filter(info => info !== 'and' 
                                      && info !== ' ');
    modifiedLine = [...applicantInfo, codeScore];
    return modifiedLine;
  });
    
  info = info.map(line => (
    line.split(' ')
  ))
    
  query.forEach((condition, index) => {
    answer[index] = checkRecruits(info, condition);
  })
    
  return answer;
}

function checkRecruits(info, conditions) {
  const sortedInfo = sortInfo(info);

  console.log(info);
}

function sortInfo(info) {
  for (let index = 0; index < 5; index++) {
    if (index === 4) {
      info = info.sort((a, b) => a - b);
    } else {
      info = info.sort((a, b) => {
        return a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0;
      })
    }
  }
}