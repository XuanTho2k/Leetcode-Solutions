class MinStack {
  private stack: number[];
  private minStk: number[];

  constructor() {
    this.stack = [];
    this.minStk = [];
  }

  push(val: number): void {
    const n = this.minStk.length;
    this.stack.push(val);

    if (this.minStk.length === 0 || this.minStk[this.minStk.length - 1] > val) {
      this.minStk.push(val);
    } else {
      this.minStk.push(this.minStk[this.minStk.length - 1]);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStk.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStk[this.minStk.length - 1];
  }
}

export default MinStack;
