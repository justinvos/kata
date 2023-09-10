/**
 * Binary Searches for needle in haystack
 * Time complexity: O(log n)
 * @param needle
 * @param haystack assumed to be sorted in ascending order
 * @returns index of found needle or -1
 */
export function binarySearch<T>(needle: T, haystack: T[]): number {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    const val = haystack[mid];

    if (needle === val) {
      return mid;
    } else if (needle < val) {
      // look at the first half next
      high = mid;
    } else {
      // look at second half next
      low = mid + 1;
    }
  }

  return -1;
}
