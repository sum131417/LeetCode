/**
 * 实现一个二叉查找树BST
 */

function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show() {
    return this.data
}

function BST() {
    this.root = null
    this.insert = insert
    this.find = find
}

function insert(data) {
    let n = new Node(data, null, null)
    if (this.root === null) {
        this.root = n
    } else {
        let current = this.root
        let parent
        while(true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current === null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current === null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

// 中序遍历
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left)
        console.log(node.show())
        inOrder(node.right)
    }
}

// 先序遍历
function preOrder(node) {
    if (node !== null) {
        console.log(node.show())
        preOrder(node.left)
        preOrder(node.right)
    }
}

// 后序遍历
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show())
    }
}

// 查找给定值
function find(data) {
    let current = this.root
    while(current !== null) {
        if (current.data === data) {
            return current
        } else if (current.data > data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return null
}

let nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log('中序遍历: ')
inOrder(nums.root)
console.log('先序遍历: ')
preOrder(nums.root)
console.log('后序遍历: ')
postOrder(nums.root)
let found = nums.find(123)
if (found !== null) {
    console.log('找到了')
} else {
    console.log('没找到')
}
