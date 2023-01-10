---
layout: post
title: Leetcode, Design Linked List
categories: Algorithm
tags:
  - algorithm
  - leetcode
  - medium
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

<center>

# Medium. Design Linked List

</center>

---

## Design Linked List

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

- MyLinkedList() Initializes the MyLinkedList object.
  int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
- void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
- void addAtTail(int val) Append a node of value val as the last element of the linked list.
- void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
- void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

### Example 1

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
myLinkedList.get(1); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
myLinkedList.get(1); // return 3

### Constraints

0 <= index, val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

### Solution

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getNode(index) {
    let currNode = this.head;
    let currIndex = 0;
    while (currIndex < index) {
      currIndex++;
      currNode = currNode.next;
    }
    return currNode;
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    return this.getNode(index).val;
  }

  initNode(node) {
    this.head = node;
    this.tail = node;
    this.size = 1;
  }

  addAtHead(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.initNode(newNode);
      return;
    }

    const prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);

    if (!this.tail) {
      this.initNode(newNode);
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;

    const newNode = new Node(val);

    if (!this.head) {
      this.initNode(newNode);
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    const prevNode = this.getNode(index - 1);
    const indexNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = indexNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    const prevNode = this.getNode(index - 1);

    if (index === this.size - 1) {
      this.tail = prevNode;
      this.size--;
      return;
    }

    const indexNode = prevNode.next;
    const nextNode = indexNode.next;

    prevNode.next = nextNode;
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

### Refactor with prototype

```js
const Node = function (val) {
  this.val = val;
  this.next = null;
};

const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.getNode = function (index) {
  let currNode = this.head;
  let currIndex = 0;
  while (currIndex < index) {
    currIndex++;
    currNode = currNode.next;
  }
  return currNode;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  return this.getNode(index).val;
};

MyLinkedList.prototype.initNode = function (node) {
  this.head = node;
  this.tail = node;
  this.size = 1;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.initNode(newNode);
    return;
  }

  const prevHead = this.head;
  this.head = newNode;
  this.head.next = prevHead;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.tail) {
    this.initNode(newNode);
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  const newNode = new Node(val);

  if (!this.head) {
    this.initNode(newNode);
    return;
  }

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  const prevNode = this.getNode(index - 1);
  const indexNode = prevNode.next;

  prevNode.next = newNode;
  newNode.next = indexNode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  const prevNode = this.getNode(index - 1);

  if (index === this.size - 1) {
    this.tail = prevNode;
    this.size--;
    return;
  }

  const indexNode = prevNode.next;
  const nextNode = indexNode.next;

  prevNode.next = nextNode;
  this.size--;
};
```
