import { expect, test } from "vitest";
import { Queue } from "../Queue";

test("Queue operates with numbers", () => {
  const q = new Queue<number>();

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);

  expect(q.peek()).toBe(1);
  expect(q.length).toBe(4);

  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);
  expect(q.dequeue()).toBe(3);
  expect(q.dequeue()).toBe(4);
  expect(q.dequeue()).toBe(null);
  expect(q.length).toBe(0);

  q.enqueue(1);
  q.enqueue(2);

  expect(q.length).toBe(2);

  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);

  expect(q.length).toBe(0);
  expect(q.dequeue()).toBe(null);

  expect(q.peek()).toBe(null);
});
