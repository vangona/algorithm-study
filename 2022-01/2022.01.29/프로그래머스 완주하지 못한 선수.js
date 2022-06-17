const participant = ["mislav", "mislav", "mislav", "ana"];
const completion = 	["mislav", "ana", "mislav"];

const answer = solution(participant, completion);
console.log(answer);

function solution(participant, completion) {
    let answer = '';

    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }

    return answer;
}