export type TreeNode<T> = {
  value: T;
  children: Array<TreeNode<T> | null>;
};

export function breadthFirstTraversal<T>(root: TreeNode<T>): Array<T> {
  const output: Array<T> = [];
  const queue: Array<TreeNode<T> | null> = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      continue;
    }

    output.push(node.value);
    queue.push(...node.children);
  }

  return output;
}
