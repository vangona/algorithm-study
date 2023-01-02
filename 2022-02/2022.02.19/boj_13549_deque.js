// 숨바꼭질 3

// input 처리
// const fs = require('fs');
// const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el * 1);

const [n, k] = [5, 17];

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    push(item) {
        const node = new Node(item);

        if (this.size === 0) {
            this.head = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
        }
        this.tail = node;

        this.size += 1;
    }

    unshift(item) {
        const node = new Node(item);

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size += 1;
    }

    shift() {
        if (this.size === 0) {
            throw Error('크기가 0인 덱에서 shift 할 수 없습니다.')
        } else if (this.size === 1) {
            const shiftedItem = this.head.item;

            this.head = null;
            this.tail = null;
            this.size -= 1;

            return shiftedItem;
        } else if (this.size === 2) {
            const shiftedItem = this.head.item;

            this.head = this.head.next;
            this.tail.prev = null;
            this.size -= 1;

            return shiftedItem;
        } else if (this.size > 2) {
            const shiftedItem = this.head.item;

            this.head.prev = null;
            this.head = this.head.next;
            this.size -= 1;

            return shiftedItem;
        }
    }
}

function bfs(n, k) {
    // 시작점과 끝점이 같으면 바로 0을 반환해줌.
    if (n === k) return 0;

    // 방문시 최대 값을 적어준다. 
    const MAX_POINT = n;

    // 방문을 위한 덱 선언
    const willVisit = new Deque();

    // 최소 시간을 구하는 문제이기 때문에, 방문한 지점을 다시 방문할 필요가 없음.
    let visited = new Array(MAX_POINT + 1);

    // 첫번째 지점에서 출발함.
    visited[n] = true;
    willVisit.push(n);

    console.log(willVisit.size);

    // bfs 몸체 실행
    while (willVisit.size) {
        const point = willVisit.shift();

        const nextArr = [point * 2, point + 1, point - 1];

        for (next of nextArr) {
            if (checkPoint(next)) {
                if (next === point * 2) {
                    willVisit.unshift(next);
                } else {
                    willVisit.push(next);
                }
                visited[next] = true;
            } 
        }
    }
    
    // 갈 포인트가 범위 내에 있는지, 방문하지는 않았는지 확인.
    function checkPoint(point) {
        if (!visited[point] && point >= 0 && point <= MAX_POINT) {
            return true;
        } else{
            return false;
        }
    }
}

// bfs 실행 & 결과 출력
const answer = bfs(n, k);
console.log(answer)