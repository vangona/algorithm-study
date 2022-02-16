const cases = ["...!@BaT#*..y.abcdefghijklm", "z-+.^.", "=.=", "123_.def", "abcdefghijklmn.p"];

for (let i = 0; i < cases.length; i++) {
    solution(cases[i]);
}

function solution(new_id) {
    var answer = '';

    answer = recomendId(new_id);

    return answer;
}

function recomendId(string) {
    let result = string;

    result = firstStep(result);
    result = secondStep(result);
    result = thirdStep(result);
    result = fourthStep(result);
    result = fifthStep(result);
    result = sixthStep(result);
    result = seventhStep(result);

    return result;
}

function firstStep(string) {
    const converted = string.toLowerCase();

    return converted;
}

function secondStep(string) {
    const regExp = /[^a-z0-9-_.]/g;

    const converted = string.replace(regExp, '');

    return converted;
}

function thirdStep(string) {
    const regExp = /\.{2,}/g;

    const converted = string.replace(regExp, '.');

    return converted;
}

function fourthStep(string) {
    let converted = string;

    if (converted[0] === '.') converted = converted.slice(1, converted.length);
    if (converted[converted.length - 1] === '.') converted = converted.slice(0, -1);

    return converted;
}

function fifthStep(string) {
    let converted = string;

    if (converted === '') converted = 'a';

    return converted;
}

function sixthStep(string) {
    let converted = string;
    
    if (converted.length > 15) converted = converted.slice(0, 15);

    if (converted[converted.length - 1] === '.') converted = converted.slice(0, -1);

    return converted;
}

function seventhStep(string) {
    let converted = string;

    if (converted.length < 3) {
        const letter = converted[converted.length - 1];

        while (converted.length !== 3) {
            converted += letter;
        }
    }

    return converted;
}