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

// console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
// console.log(findRotationCount([7, 9, 11, 12, 5])); // Output: 4
// console.log(findRotationCount([7, 9, 11, 12, 15])); // Output: 0

module.exports = findRotationCount;
