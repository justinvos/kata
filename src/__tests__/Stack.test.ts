import { expect, test } from "vitest";
import { Stack } from "../Stack";

test("Stack operates with numbers", () => {
  const stack = new Stack<number>();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);

  expect(stack.peek()).toBe(4);
  expect(stack.length).toBe(4);

  expect(stack.pop()).toBe(4);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
  expect(stack.pop()).toBe(null);
  expect(stack.length).toBe(0);

  stack.push(1);
  stack.push(2);

  expect(stack.length).toBe(2);

  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);

  expect(stack.length).toBe(0);
  expect(stack.pop()).toBe(null);

  expect(stack.peek()).toBe(null);
});
