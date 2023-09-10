import { expect, test } from "vitest";
import { binarySearch } from "../BinarySearch";

test("binarySearch using numbers", () => {
  expect(binarySearch(3, [1, 2, 3, 4, 5, 6, 7])).toBe(2);
});

test("binarySearch using strings", () => {
  expect(binarySearch("g", ["a", "c", "d", "e", "f", "g", "h"])).toBe(5);
});
