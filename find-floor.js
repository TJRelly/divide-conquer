function findFloor(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  // find highest number <= n
  if (arr[end] <= n) return arr[end];
  if (arr[start] >= n) return -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === n) return arr[mid];
    else if (arr[mid] < n && arr[mid + 1] > n) return arr[mid];
    else if (arr[mid] < n && arr[mid + 1] === n) return arr[mid + 1];
    else if (arr[mid] > n) end = mid - 1;
    else start = mid + 1;
  }
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1

module.exports = findFloor;
