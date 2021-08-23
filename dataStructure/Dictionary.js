/**
 * 实现一个字典类
 */

function Dictionary() {
    this.add = add
    this.datastore = new Array()
    this.find = find
    this.remove = remove
    this.showAll = showAll
    this.count = count
    this.clear = clear
}

function add(key, value) {
    this.datastore[key] = value
}

function find(key) {
    return this.datastore[key]
}

function remove(key) {
    delete this.datastore[key]
}

function showAll() {
    let datakeys = Array.from(Object.keys(this.datastore)).sort()
    for (let i = 0; i < datakeys.length; i++) {
        console.log(`key: ${datakeys[i]}, value: ${this.datastore[datakeys[i]]}`)
    }
}

function count() {
    let n = 0
    debugger
    for (const key in Object.keys(this.datastore)) {
        n++
    }
    return n
}

function clear() {
    Object.keys(this.datastore).forEach(key => {
        delete this.datastore[key]
    })
}

let pbook = new Dictionary()
pbook.add('Mike', '123')
pbook.add('David', '345')
pbook.add('Cynthia', '456')
pbook.showAll()
console.log(pbook.count())
pbook.clear()
console.log(pbook.count())
