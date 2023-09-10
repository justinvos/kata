export function quickSort<T>(
  array: T[],
  low: number = 0,
  high: number = array.length - 1
) {
  if (low >= high) {
    return;
  }

  const mid = partition(array, low, high);

  quickSort(array, low, mid - 1);
  quickSort(array, mid + 1, high);
}

function partition<T>(array: T[], low: number, high: number) {
  const pivotValue = array[high];

  let pointer = low;

  for (let i = low; i < high; i++) {
    if (array[i] <= pivotValue) {
      const temp = array[i];
      array[i] = array[pointer];
      array[pointer] = temp;
      pointer++;
    }
  }

  array[high] = array[pointer];
  array[pointer] = pivotValue;

  return pointer;
}
