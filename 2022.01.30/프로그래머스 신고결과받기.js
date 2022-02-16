function solution(id_list, report, k) {
    var answer = [];

    const idObj = new Object();
    const answerObj = new Object();
    for (let i = 0; i < id_list.length; i++) {
        idObj[id_list[i]] = [];
        answerObj[id_list[i]] = 0;
    }

    for (let i = 0; i < report.length; i++) {
        const line = report[i].split(' ');
        if (idObj[line[1].includes(line[0])]) continue;
        idObj[line[1]].push(line[0]);
    }

    console.log(idObj);

    for (let i = 0; i < id_list.length; i++) {
        if (idObj[id_list[i]].length > 1) {
            answerObj[id_list[i]] += 1;
        }
    }

    console.log(answerObj);

    return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];

solution(id_list, report);

// 문제 이해 잘못함. 신고한 사람한테, 메일 갈 수 있도록.