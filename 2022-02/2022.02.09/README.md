백준 1260번

이제 dfs 구현은 간단하니, Graph 객체로 만들고 메소드로 만드는 시도를 해보았다.

정점 번호가 작은 것을 먼저 방문한다는 것을 잘못 이해해서 정렬을 따로 하려고 했었는데, 이미 인접배열 선언과 반복문 사용에서 정렬이 끝나있었다.

bfs가 문제였는데, 서치해서 원리를 파악하고 같이 클래스로 구현해보았다.