class CircualQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    if (this.front === -1) {
      this.front = this.rear;
    }
    this.currentLength++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.front];
  }

  print() {
    let str = "";
    for (let i = 0; i <= this.rear; i++) {
      if (this.items[i] === 0 || this.items[i]) str += `${this.items[i]} `;
    }
    console.log("Elements", str);
  }
}

const circle = new CircualQueue(5);
circle.enqueue(1);
circle.enqueue(2);
circle.enqueue(3);
circle.enqueue(4);
circle.dequeue();
circle.dequeue();
circle.dequeue();
circle.dequeue();
console.log(circle.isEmpty());
