# divide-conquer

## Count zeros
```
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
```
## Find floor
```
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
```
## Find rotated index
```
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
```
## Find rotation count
```
function findRotationCount(arr) {
  // find the index of the lowest number
  // lowest number is where idx < idx - 1
  // otherwise return 0
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (mid === 0 || arr[mid] < arr[mid - 1]) return mid;
    else if (arr[mid] > arr[end]) start = mid + 1;
    else end = mid - 1;
  }
}
```
## Sorted frequency
```
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
```

