class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.size = 0;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let values = "";
    while (current) {
      values += `${current.value} -> `;
      current = current.next;
    }
    console.log(values)
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  set(value, index) {
    if (index < 0 || index > this.size) return;

    const node = new Node(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      node.next = current.next;
      current.next = node;
    }

    this.size++;
  }

  delete(index) {
    if (this.isEmpty()) return;
    if (index < 0 || index > this.size) {
      console.log("Index out of bounds");
      return;
    }

    if (index === 0) {
      const next = this.head.next;
      this.head = next;
      return;
    }

    let current = this.head;
    let prev;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.size--;
  }
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(4);
list.set(5, 2);
list.print();
console.log;
list.delete(3);
list.print();
