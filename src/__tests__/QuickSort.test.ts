import { expect, test } from "vitest";
import { quickSort } from "../QuickSort";

test("quickSort with normal-case numbers", () => {
  const array = [2, 7, 4, 5, 3, 1, 6];

  quickSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("quickSort with empty array", () => {
  const array: number[] = [];

  quickSort(array);

  expect(array).toEqual([]);
});

test("quickSort with single item", () => {
  const array = [2];

  quickSort(array);

  expect(array).toEqual([2]);
});

test("quickSort with worst-case strings", () => {
  const array = ["h", "g", "f", "e", "d", "c", "b", "a"];

  quickSort(array);

  expect(array).toEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
});
