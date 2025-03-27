class OptmizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.front];
  }

  print() {
    console.log(JSON.stringify(this.items));
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new OptmizedQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// queue.print();
console.log(queue.peek());
