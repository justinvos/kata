import { expect, test } from "vitest";
import {
  BinaryTreeNode,
  preorderTreeTraversal,
} from "../PreorderBinaryTreeTraversal";

test("preorderTreeTraversal using numbers", () => {
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

  expect(preorderTreeTraversal(root)).toStrictEqual([7, 23, 5, 4, 8, 21, 15]);
});
