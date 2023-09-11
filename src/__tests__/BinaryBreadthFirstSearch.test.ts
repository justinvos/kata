import { expect, test } from "vitest";
import {
  BinaryTreeNode,
  breadthFirstSearch,
} from "../BinaryBreadthFirstSearch";

test("breadthFirstSearch for existing value", () => {
  const root: BinaryTreeNode<number> = {
    value: 7,
    left: {
      value: 23,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 21,
        left: null,
        right: null,
      },
      right: {
        value: 15,
        left: null,
        right: null,
      },
    },
  };

  expect(breadthFirstSearch(root, 4)).toBe(true);
});

test("breadthFirstSearch for existing value", () => {
  const root: BinaryTreeNode<number> = {
    value: 7,
    left: {
      value: 23,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 21,
        left: null,
        right: null,
      },
      right: {
        value: 15,
        left: null,
        right: null,
      },
    },
  };

  expect(breadthFirstSearch(root, 6)).toBe(false);
});
