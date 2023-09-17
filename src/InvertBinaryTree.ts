export function invertBinaryTree<T>(root: BinaryTreeNode<T> | null): void {
  if (!root) {
    return;
  }

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);

  const temp = root.left;
  root.left = root.right;
  root.right = temp;
}

export type BinaryTreeNode<T> = {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
};
