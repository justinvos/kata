export class Stack<T> {
  length: number;
  private head: StackNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(value: T) {
    const newNode: StackNode<T> = {
      prev: this.head,
      value,
    };

    this.length++;
    this.head = newNode;
  }

  pop() {
    const out = this.head?.value ?? null;
    this.head = this.head?.prev ?? null;
    this.length = Math.max(this.length - 1, 0);

    return out;
  }

  peek(): T | null {
    return this.head?.value ?? null;
  }
}

type StackNode<T> = {
  prev: StackNode<T> | null;
  value: T;
};
