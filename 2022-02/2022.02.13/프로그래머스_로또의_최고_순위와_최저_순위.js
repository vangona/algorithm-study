const lottos = [[44, 1, 0, 0, 31, 25], [0, 0, 0, 0, 0, 0], [45, 4, 35, 20,3 ,9]];
const win_nums = [[31, 10, 45, 1, 6, 19], [38, 19, 20, 40, 15, 25], [20, 9, 3, 45, 4, 35]];

for (let i = 0; i < lottos.length; i++) {
    solution(lottos[i], win_nums[i]);
}

function solution(lottos, win_nums) {
    var answer = [];

    let win_count = 0;
    let lost_numbers = 0;

    for (let i = 0; i < 6; i++) {
        if(lottos.indexOf(win_nums[i]) !== -1) win_count++;

        if(lottos[i] === 0) lost_numbers++;
    }

    const best_result = checkRank(win_count + lost_numbers);
    const worst_result = checkRank(win_count);

    answer.push(best_result);
    answer.push(worst_result);

    console.log(answer);

    return answer;
}

function checkRank(count) {
    if (count > 1) {
        return 7 - count;
    } else {
        return 6;
    }

}