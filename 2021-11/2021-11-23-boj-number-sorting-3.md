---
layout: post
title: 백준 문제풀이 10989번 수 정렬하기 3
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - sorting
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 10989번 수 정렬하기 3</center>

---

## 10989번 수 정렬하기 3 (Silver 5)

### 문제

https://www.acmicpc.net/problem/10989

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

### 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

시간 제한 5초, 메모리 제한 8MB

### 접근

힌트가 카운팅 정렬이었어서, 카운팅 정렬에 대해 찾아보았다.

### 계수 정렬 (Counting sort)

Counting Sort는 O(n)의 시간 복잡도를 가지는 정렬 알고리즘이다. 일반적으로는 평균 시간 복잡도가 O(nlogn)인 Quick Sort 알고리즘이 더 빠르지만 수의 등장 횟수를 누적합으로 바꿔주는 Counting Sort의 경우 수의 범위 특정하게 정해진 경우 range를 구해서 빠르게 정렬할 수 있다. 하지만 대부분의 상황에서 엄청난 메모리 낭비가 될 수 있다.

일단 설명만 보고 스스로 구현을 먼저 해보고, 막히면 찾아보기로 했다.

### 풀이

범위에 맞는 countArr를 만들어서 풀려고 했는데, 바로 메모리 초과가 나왔다.

찾아보니, node.js는 메모리 초과가 나와서, 추후 제한 완화 예정이라고 해서 파이썬으로 찾아서 문제를 풀었다. 설명되어있는 counting sort를 사용해보고 싶었는데, 생각과는 달리 더 빠른 방법이 있었다.

python으로 풀때도 input으로 받으면 메모리 초과가 나온다고 해서, sys.stdin.readline()을 사용해서 풀었다. 나중에 node.js 메모리 제한이 풀리면 다시 풀어보고 싶다.

파이썬에서는 반복문에 변수가 사용되지 않을 경우, \_를 사용한다는 것도 인상깊었다.

그리고 FE 개발자도 파이썬으로 코딩 테스트를 준비하는 이유도 느껴볼 수 있었다...☆

### 소스코드

```python
import sys

N = int(sys.stdin.readline())
num_list = [0] * 10001

for _ in range(N) :
    num = int(sys.stdin.readline())
    num_list[num] += 1

for i in range(10001) :
    countNum = num_list[i]
    for _ in range(countNum) :
        print(i)
```
