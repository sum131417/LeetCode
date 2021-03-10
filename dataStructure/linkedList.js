/**
 * 实现一个链表
 */

function Node(element) {
  this.element = element
  this.next = null
}

function LList() {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  // this.remove = remove
  this.display = display
}

function find(item) {
  let currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
}

function insert(newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

function display() {
  let currNode = this.head
  while(currNode.next !== null) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}

let cities = new LList()
cities.insert('Conway', 'head')
cities.insert('Russellville', 'Conway')
cities.insert('Alma', 'Russellville')
cities.display()