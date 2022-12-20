# 1924번 2007년

---

구현 문제는 어떤 메소드를 쓰는지도 중요하다.
복잡하게 생각하지 말고, 최선을 다해 구현하자.

---

# 11721번 열 개씩 끊어 출력하기

---

## 문자열 자르기

### 1) split()

: 구분자를 기준으로, 문자열을 분리하여 배열로 반환.

### 2) substr()

: 주어진 Index에서 원하는 길이만큼 잘라서 문자열로 반환.

### 3) substring()

: 시작 Index에서 끝 Index 전까지 문자열을 잘라서 반환

### 4) slice()

: substring은 음수 값은 0으로 인식됨.,
slice는 음수 값을 입력받으면 index가 뒤에서부터 계산됨.

---

# 2475번 검증수

---

## reduce 주의사항

정확한 계산을 위해서는 초기값을 꼭 설정해주자.