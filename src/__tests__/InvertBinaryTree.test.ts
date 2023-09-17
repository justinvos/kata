import { expect, test } from "vitest";
import { invertBinaryTree, BinaryTreeNode } from "../InvertBinaryTree";

test("invertBinaryTree using numbers", () => {
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

  invertBinaryTree(treeA);

  expect(treeA.value).toBe(7);
  expect(treeA.left?.value).toBe(8);
  expect(treeA.right?.value).toBe(23);
});
