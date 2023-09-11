export function compareBinaryTrees<T>(
  treeA: BinaryTreeNode<T> | null,
  treeB: BinaryTreeNode<T> | null
): boolean {
  if (treeA == null && treeB == null) {
    return true;
  }

  if (treeA == null || treeB == null) {
    return false;
  }

  if (treeA.value !== treeB.value) {
    return false;
  }

  return (
    compareBinaryTrees(treeA.left, treeB.left) &&
    compareBinaryTrees(treeA.right, treeB.right)
  );
}

export type BinaryTreeNode<T> = {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
};
