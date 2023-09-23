import { expect, test } from "vitest";
import { breadthFirstTraversal, TreeNode } from "../BreadthFirstTraversal";

test("breadthFirstTraversal for missing value", () => {
  const root: TreeNode<number> = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          null,
          {
            value: 5,
            children: [],
          },
        ],
      },
      {
        value: 3,
        children: [
          null,
          {
            value: 4,
            children: [],
          },
        ],
      },
    ],
  };

  expect(breadthFirstTraversal(root)).toStrictEqual([1, 2, 3, 5, 4]);
});
