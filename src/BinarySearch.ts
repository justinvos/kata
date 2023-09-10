/**
 *
 * @param needle
 * @param haystack assumed to be sorted in ascending order
 * @returns
 */
export function binarySearch<T>(needle: T, haystack: T[]): number {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const val = haystack[mid];
    console.log("iter", low, mid, high, val);

    if (needle === val) {
      return mid;
    } else if (needle > val) {
      // look at second half
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return -1;
}

console.log("BinarySearch:", binarySearch(3, [1, 2, 3, 4, 5, 6, 7]));
