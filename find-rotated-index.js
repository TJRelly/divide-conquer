function findRotatedIndex(arr, n) {
  //find pivot - time O(log n)
  const pivot = findPivot(arr);
  //arr at pivot - hi, arr at pivot + 1 - lo
  if (n > arr[pivot] || n < arr[pivot + 1]) return -1;
  else if (arr[pivot] === n) return pivot;
  else if (arr[0] === n) return 0;
  else if (arr[arr.length - 1] === n) return arr.length - 1;

  //binary search each section
  //start to pivot
  if (n > arr[0] && n < arr[pivot]) {
    const idx = binarySearch(arr.slice(0, pivot + 1), n);
    if(idx === -1) return -1
    else return idx
  }
  //pivot to end
  else {
    const idx = binarySearch(arr.slice(pivot + 1, arr.length), n);
    if(idx === -1) return -1
    else return idx + pivot + 1
  } 
}

function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === n) return mid;
    else if (arr[mid] > n) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

// Time O(log n)
function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid] < arr[mid - 1]) return mid - 1;

    if (arr[mid] < arr[mid + 1]) start = mid + 1;
  }
}

// console.log(findPivot([3, 4, 1, 2], 4)); // 1
// console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 3
// console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 3
// console.log(findPivot([37, 44, 66, 102, 10, 22], 14)); // 3
// console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4], 12)); // 3

// console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1

module.exports = findRotatedIndex;
