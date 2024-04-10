function sortedFrequency(arr, n) {
  //find first n
  const first = firstN(arr, n)
  //find last n
  const last = lastN(arr, n)

  if(first === -1) return -1
  else return last - first + 1
}

function firstN(arr, n) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if(arr[midIdx] === n && arr[midIdx - 1] !== n) return midIdx

    if (arr[midIdx] >= n) rightIdx = midIdx - 1;
    else if (arr[midIdx] < n) leftIdx = midIdx + 1;
  }
  return -1;
}

function lastN(arr, n) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[midIdx] === n && arr[midIdx + 1] !== n) {
      return midIdx;
    }

    if (arr[midIdx] <= n) leftIdx = midIdx + 1;
    if (arr[midIdx] > n) rightIdx = midIdx - 1;
  }
  return -1;
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1

// console.log(firstN([1, 1, 2, 2, 2, 2, 3], 2)); // 2
// console.log(firstN([1, 1, 2, 2, 2, 2, 3], 3)); // 6
// console.log(firstN([1, 1, 2, 2, 2, 2, 3], 1)); // 0
// console.log(firstN([1, 1, 2, 2, 2, 2, 3], 4)); // -1

// console.log(lastN([1, 1, 2, 2, 2, 2, 3], 2)); // 5
// console.log(lastN([1, 1, 2, 2, 2, 2, 3], 3)); // 6
// console.log(lastN([1, 1, 2, 2, 2, 2, 3], 1)); // 1
// console.log(lastN([1, 1, 2, 2, 2, 2, 3], 4)); // -1

module.exports = sortedFrequency;
