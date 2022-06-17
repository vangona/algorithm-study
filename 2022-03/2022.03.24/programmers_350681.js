console.log(solution([1, 1, 9, 1, 1, 1], 0));

function solution(priorities, location) {
  var answer = 1;
  
  while (true) {
      let maxPriority = Math.max(...priorities);
      const currDocument = priorities.shift();
      if (currDocument < maxPriority) {
          priorities.push(currDocument);
          if (location === 0) {
              location = priorities.length - 1;
          } else {
              location--; 
          }
      } else {
          if (location === 0) {
              break;
          } else {
              maxPriority = Math.max(...priorities);
              location--; 
              answer++;               
          }
      }
  }
  
  return answer;
}