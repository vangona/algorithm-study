function solution(id_list, report, k) {
    var answer = [];

    const idObj = new Object();
    for (let i = 0; i < id_list.length; i++) {
        idObj[i] = [];
        answer[i] = 0;
    }

    for (let i = 0; i < report.length; i++) {
        const line = report[i].split(' ');
        const reporterIdx = id_list.indexOf(line[0]);
        const reportedIdx = id_list.indexOf(line[1]);
        if (idObj[reportedIdx].includes(reporterIdx))continue;
        idObj[reportedIdx].push(reporterIdx);
    }

    for (let i = 0; i < id_list.length; i++) {
        if (idObj[i].length >= k) {
            for (let j = 0; j < idObj[i].length; j++) {
                answer[idObj[i][j]] += 1;
            }
        }
    }

    return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];

solution(id_list, report, 2);