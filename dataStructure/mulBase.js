/**
 * 数制间的相互转换
 */

function mulBase(num, base) {
  let list = []
  do {
    list.push(num % base)
    num = Math.floor(num /= base)
  } while (num > 0)
  console.log(list.reverse().join(''))
}

mulBase(38, 8)