/**
 * 1137.第 N 个泰波那契数
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 2) {
      return n
  }
  if (n < 3) {
      return 1
  }
  let pre = 0, mid = 1, cur = 1
  for (let i = 3; i <= n; i++) {
      let sum = pre + mid + cur
      pre = mid
      mid = cur
      cur = sum
  }
  return cur
};