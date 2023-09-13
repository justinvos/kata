export class Queue<T> {
  head: QueueNode<T> | null;
  tail: QueueNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value: T): void {
    const newNode = {
      next: null,
      value,
    };

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue(): T | null {
    this.length = Math.max(this.length - 1, 0);
    const out = this.head?.value ?? null;
    this.head = this.head?.next ?? null;
    return out;
  }

  peek(): T | null {
    return this.head?.value ?? null;
  }
}

type QueueNode<T> = {
  next: QueueNode<T> | null;
  value: T;
};
