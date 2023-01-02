// 1991 트리 순회

// input 처리
// const fs = require('fs');
// let [N, ...treeData] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...treeData] = ['7', 'A B C', 'B D .', 'C E F', 'E . .', 'F . G', 'D . .', 'G . .'];

let answer = '';

// 트리 클래스 생성
class Tree {
  // 데이터를 통해서 tree를 생성해준다.
  constructor(numbers, data) {
    this.storage = {};
    this.preorder = '';
    this.inorder = '';
    this.postorder = '';
    for (let i = 0; i < numbers; i++) {
        const [node, left, right] = data[i].split(' ');
        this.storage[node] = [left, right];
    }
  }

  // 순회 메서드를 만들어준다.
  // 전위 순회
  checkPreorder(root) {
    if (root === '.') return;

    const [leftNode, rightNode] = this.storage[root];

    this.preorder += root;
    this.checkPreorder(leftNode);
    this.checkPreorder(rightNode);
  }

  // 중위 순회
  checkInorder(root) {
    if (root === '.') return;

    const [leftNode, rightNode] = this.storage[root];

    this.checkInorder(leftNode);
    this.inorder += root;
    this.checkInorder(rightNode);
  }

  // 후위 순회
  checkPostOrder(root) {
    if (root === '.') return;

    const [leftNode, rightNode] = this.storage[root];

    this.checkPostOrder(leftNode);
    this.checkPostOrder(rightNode);
    this.postorder += root;
  }
}

// 만들어진 클래스를 통해서 트리를 만들어준다.
const tree = new Tree(N, treeData);

// 메서드들을 통해서 각 순서를 답안에 추가해준다.
tree.checkPreorder('A');
answer += tree.preorder + '\n';
tree.checkInorder('A');
answer += tree.inorder + '\n';
tree.checkPostOrder('A');
answer += tree.postorder;

// 출력
console.log(answer);