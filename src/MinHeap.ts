export class MinHeap {
  public length: number;
  public data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    if (this.length === 1) {
      this.data = [];
      this.length = 0;
      return out;
    }

    this.data[0] = this.data[this.length - 1];
    this.length--;
    this.heapifyDown(0);

    return out;
  }

  private heapifyDown(index: number): void {
    if (index >= this.length) {
      return;
    }

    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if (leftIndex >= this.length) {
      return;
    }

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const currentValue = this.data[index];

    if (leftValue > rightValue && currentValue > rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = currentValue;
    } else if (leftValue < rightValue && currentValue > leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = currentValue;
    }
  }

  private heapifyUp(index: number): void {
    if (index === 0) {
      return;
    }

    const parentIndex = this.parent(index);
    const parentValue = this.data[parentIndex];

    const currentValue = this.data[index];

    if (parentValue > currentValue) {
      this.data[index] = parentValue;
      this.data[parentIndex] = currentValue;
      this.heapifyUp(parentIndex);
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }
}
