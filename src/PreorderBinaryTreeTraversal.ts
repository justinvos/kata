export function preorderTreeTraversal<T>(root: TreeNode<T>) {
  return walk(root, []);
}

function walk<T>(node: TreeNode<T> | null, path: T[]) {
  if (!node) {
    return;
  }

  path.push(node.value);

  walk(node.left, path);
  walk(node.right, path);

  return path;
}

export type TreeNode<T> = {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
};
