export function depthFirstSearchOnBinarySearchTree<T>(
  head: BinaryTreeNode<T> | null,
  needle: T
): boolean {
  console.log("depthFirstSearchOnBinarySearchTree", head?.value);
  if (!head) {
    return false;
  }

  if (head.value === needle) {
    return true;
  } else if (head.value < needle) {
    return depthFirstSearchOnBinarySearchTree(head.right, needle);
  } else {
    return depthFirstSearchOnBinarySearchTree(head.left, needle);
  }
}

export type BinaryTreeNode<T> = {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
};
