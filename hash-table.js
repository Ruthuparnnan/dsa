class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  print() {
    console.log(this.table);
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const itemWithSameKey = bucket.find((item) => item[0] === key);
      if (itemWithSameKey) {
        itemWithSameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    } else {
      this.table[index] = [[key, value]];
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const itemWithSameKey = bucket.find((item) => item[0] === key);
      if (itemWithSameKey) return itemWithSameKey[1];
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return;
    const indexOfItemToRemove = bucket.findIndex((item) => item[0] === key);
    if (indexOfItemToRemove !== -1) {
      bucket.splice(indexOfItemToRemove, 1);
      if (bucket.length === 0) {
        this.table[index] = undefined; 
    }
    }
  }
}

const table = new HashTable(10);
table.set("abc", "world");
table.set("cba", "morld");
table.remove("abc");
table.print();
