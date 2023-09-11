export function breadthFirstSearch<T>(root: BinaryTreeNode<T>, needle: T) {
  const q: (BinaryTreeNode<T> | null)[] = [root];

  while (q.length) {
    console.log("q", q);
    const current = q.shift();
    if (!current) {
      continue;
    }

    if (current.value === needle) {
      return true;
    }

    q.push(current.left);
    q.push(current.right);
  }

  return false;
}

export type BinaryTreeNode<T> = {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
};
