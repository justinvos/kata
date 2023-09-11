export function preorderTreeTraversal<T>(root: BinaryTreeNode<T>) {
  return walk(root, []);
}

function walk<T>(node: BinaryTreeNode<T> | null, path: T[]) {
  if (!node) {
    return;
  }

  path.push(node.value);

  walk(node.left, path);
  walk(node.right, path);

  return path;
}

export type BinaryTreeNode<T> = {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
};
