// 프로그래머스 2019 카카오 블라인드 채용 오픈채팅방

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));

function solution(record) {
  var answer = [];

  const logIndex = {};

  record.forEach(line => {
    const data = line.split(' ');
    switch (data[0]) {
      case 'Change' :
        changeUserName(data, answer, logIndex);
        break;
      default :
        recordUserEnterAndLeave(data, answer ,logIndex);
    }
  });

  return answer;
}

function changeUserName(data, accessLog, logIndex) {
  logIndex[data[1]].enterLeaveLog.forEach(index => {
    accessLog[index] = accessLog[index].replace(logIndex[data[1]].nickname, data[2]);
  });

  logIndex[data[1]].nickname = data[2];
}

function recordUserEnterAndLeave(data, accessLog, logIndex) {
  if (data[0] === 'Enter') {
    handleEntryNickname(data, accessLog, logIndex);
  }

  if (Array.isArray(logIndex[data[1]].enterLeaveLog)) {
    logIndex[data[1]].enterLeaveLog.push(accessLog.length);
  } else {
    logIndex[data[1]].enterLeaveLog = [accessLog.length];
  }

  switch (data[0]) {
    case 'Enter' :
      accessLog.push(`${logIndex[data[1]].nickname}님이 들어왔습니다.`);
      break;
    case 'Leave' :
      accessLog.push(`${logIndex[data[1]].nickname}님이 나갔습니다.`);
      break;
  }
}

function handleEntryNickname(data, accessLog, logIndex) {
  if (!logIndex[data[1]]) {
    logIndex[data[1]] = {
      nickname : data[2]
    };
  } else {
    if (logIndex[data[1]].nickname !== data[2]) {
      changeUserName(data, accessLog, logIndex);
    }
  }
}