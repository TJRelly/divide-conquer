function countZeroes(arr) {
  leftIdx = 0;
  rightIdx = arr.length - 1;

  if (arr[leftIdx] === 0) return arr.length;
  else if (arr[rightIdx] === 1) return 0;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal === 1 && arr[midIdx + 1] === 0) {
      return arr.length - midIdx - 1;
    } else if (midVal === 1) {
      leftIdx = midIdx + 1;
    }

    if (midVal === 0 && arr[midIdx - 1] === 1) {
      return arr.length - midIdx;
    } else if (midVal === 0) {
      rightIdx = midIdx - 1;
    }
  }
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
console.log(countZeroes([1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));// 7
console.log(countZeroes([1, 1, 1, 1, 0, 0, 0, 0]));// 4

module.exports = countZeroes;
