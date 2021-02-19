/**
 * 实现一个列表类
 */
function List() {
  this.listSize = 0            // 列表的元素个数
  this.pos = 0                 // 列表的当前位置
  this.dataStore = []          // 初始化一个空数组来保存列表元素
  this.clear = clear           // 清空列表中的所有元素
  this.find = find             // 在列表中查找某一元素
  this.toString = toString     // 返回列表的字符串形式
  this.insert = insert         // 在现有元素后插入新元素
  this.append = append         // 在列表的末尾添加新元素
  this.remove = remove         // 在列表中删除元素
  this.front = front           // 将列表的当前位置移动到第一个元素
  this.end = end               // 将列表的当前位置移动到最后一个元素
  this.prev = prev             // 将当前位置前移一位
  this.next = next             // 将当前位置后移一位
  this.hasNext                 // 判断后一位
  this.hasPrev                 // 判断前一位
  this.length = length         // 返回列表中元素的个数
  this.currPos = currPos       // 返回列表的当前位置
  this.moveTo = moveTo         // 将当前位置移动到指定位置
  this.getElement = getElement // 返回当前位置的元素
  this.contains = contains     // 判断给定值是否在列表中
}

function append(element) {
  this.dataStore[this.listSize++] = element
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i
    }
  }
  return -1
}

function remove(element) {
  let foundAt = this.find(element)
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
    --this.listSize
    return true
  }
  return false
}

function length() {
  return this.listSize
}

function toString() {
  return this.dataStore
}

function insert(element, after) {
  let insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }
  return false
}

function clear() {
  delete this.dataStore
  this.dataStore.length = 0
  this.listSize = this.pos = 0
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true
    }
  }
  return false
}

function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  --this.pos
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos
  }
}

function currPos() {
  return this.pos
}

function moveTo(position) {
  this.post = position
}

function getElement() {
  return this.dataStore[this.pos]
}

function hasNext() {
  return this.pos < this.listSize
}

function hasPrev() {
  return this.pos >= 0
}

let names = new List()
names.append('Cynthia')
names.append('Raymond')
names.append('Clayton')
names.append('Jennifer')
names.append('Bryan')
names.append('Danny')
names.front()
console.log(names.getElement())
names.next()
console.log(names.getElement())
names.next()
names.next()
names.prev()
console.log(names.getElement())