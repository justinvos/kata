import { expect, test } from "vitest";
import { BinaryTreeNode, compareBinaryTrees } from "../CompareBinaryTrees";

test("breadthFirstSearch for same values but different structure", () => {
  const treeA: BinaryTreeNode<number> = {
    value: 7,
    left: {
      value: 23,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  };

  const treeB: BinaryTreeNode<number> = {
    value: 7,
    left: {
      value: 23,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  };

  expect(compareBinaryTrees(treeA, treeB)).toBe(false);
});

test("breadthFirstSearch for same values and same structure", () => {
  const treeA: BinaryTreeNode<number> = {
    value: 7,
    left: {
      value: 23,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  };

  const treeB: BinaryTreeNode<number> = {
    value: 7,
    left: {
      value: 23,
      left: null,
      right: null,
    },
    right: {
      value: 8,
      left: null,
      right: null,
    },
  };

  expect(compareBinaryTrees(treeA, treeB)).toBe(true);
});
