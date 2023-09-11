import { expect, test } from "vitest";
import {
  BinaryTreeNode,
  depthFirstSearchOnBinarySearchTree,
} from "../DepthFirstSearchOnBinarySearchTree";

test("depthFirstSearchOnBinarySearchTree for existing value", () => {
  const root: BinaryTreeNode<number> = {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null,
      },
      right: {
        value: 25,
        left: null,
        right: null,
      },
    },
  };

  expect(depthFirstSearchOnBinarySearchTree(root, 25)).toBe(true);
});

test("depthFirstSearchOnBinarySearchTree for missing value", () => {
  const root: BinaryTreeNode<number> = {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null,
      },
      right: {
        value: 25,
        left: null,
        right: null,
      },
    },
  };

  expect(depthFirstSearchOnBinarySearchTree(root, 6)).toBe(false);
});
