/**
 * 数据测试平台类
 */

function CArray(numElements) {
    this.dataStore = []
    this.pos = 0
    this.numElements = numElements
    this.insert = insert
    this.toString = toString
    this.clear = clear
    this.setData = setData
    this.swap = swap
    for (let i = 0; i < numElements; i++) {
        this.dataStore[i] = i
    }
}

function setData() {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}

function clear() {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = 0
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element
}

function toString() {
    let restr = ''
    for (let i = 0; i < this.dataStore.length; i++) {
        restr += this.dataStore[i] + ' '
        if (i > 0 && i % 10 === 0) {
            restr += '\n'
        }
    }
    return restr
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

let numElements = 100
let myNums = new CArray(numElements)
myNums.setData()
console.log(myNums.toString())
