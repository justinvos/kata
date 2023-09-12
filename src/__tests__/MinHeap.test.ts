import { expect, test } from "vitest";
import { MinHeap } from "../MinHeap";

test("minHeap", () => {
  const heapA = new MinHeap();
  heapA.insert(71);
  heapA.insert(100);
  heapA.insert(50);
  heapA.insert(25);

  expect(heapA.data).toStrictEqual([25, 50, 71, 100]);
});
