9663번 N-Queen

매일 알고리즘 공부를 하기 위해서, 헬스에서 하는 디로딩의 개념을 사용하고는 한다.

휴일이 없다보니, 종종 입력되는 정보가 너무 과부화되는 날 무리하게 문제를 풀면 남는 것이 없이 정답만을 위해서 문제를 푸는 경우가 생긴다. 매일 문제를 푸는 이유는 논리적 사고에 점진적인 탄력을 주기 위해서인데, 이것을 깨기도 싫기 때문에 평소보다 낮은 난이도의 문제를 푼다.

요즘은 이전에 풀었다가 실패했던 문제에 다시 도전하기도 한다.

N-Queen 문제는 이런 유형이었다.

// 풀이 후

꽤 여러 시행착오를 거쳤다.

처음에는 Queen의 공격범위를 전부 방문처리 하려 했었으나 시간초과가 났고, column과 row의 진행방향을 최적화 시켜서 현재 column의 아랫 부분만 방문처리 하는 방법으로 해결할 수 있었다.

돌리고 나니 14번째가 시간초과가 나올줄 알았는데 알고보니 1초가 아니라 10초의 시간제한이라서 여유롭게 풀 수 있었다.

( 수의 범위도 작고, 테스트 케이스가 14개일거라서 배열로 만들어서 전부 구한다음 해시테이블로 출력하면 정답처리가 될지 호기심이 생겨서 해봤다. 된다. 호기심 해결! )
