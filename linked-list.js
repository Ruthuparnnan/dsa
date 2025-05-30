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
    this.tail = null;
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
      this.tail = node;
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
    console.log(values);
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
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
      if (index === this.size) this.tail = node;
    }

    this.size++;
  }

  removeByIndex(index) {
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
    if (index === this.size - 1) this.tail = prev;
    this.size--;
  }

  removeByValue(value) {
    if (this.isEmpty()) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    if (this.tail.value === value) {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.size--;
      return;
    }

    let current = this.head.next;
    let prev = this.head;

    while (current !== null && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (current === null) return;

    prev.next = current.next;
    this.size--;
  }

  searchByValue(value) {
    if (this.isEmpty()) return;
    if (this.head.value === value) return 0;
    if (this.tail.value === value) return this.size - 1;
    let current = this.head.next;
    for (let i = 1; i < this.size && current !== null; i++) {
      if (current.value === value) return i;
      current = current.next;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty() || this.size === 1) return;

    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next; // Store next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev to current
      current = next; // Move current to next
    }

    this.head = prev; // Update head to the new front (prev was last node)
  }
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(4);
list.set(5, 2);
// list.print();
list.removeByIndex(3);
list.removeByValue(5);
// list.print();
console.log(list.searchByValue(4));
