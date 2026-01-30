class MinHeap {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
    this._bubbleUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 1) return this.data.pop();
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._bubbleDown(0);
    return top;
  }

  _bubbleUp(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[p][0] <= this.data[i][0]) break;
      [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
      i = p;
    }
  }

  _bubbleDown(i) {
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const l = i * 2 + 1;
      const r = i * 2 + 2;

      if (l < n && this.data[l][0] < this.data[smallest][0]) {
        smallest = l;
      }
      if (r < n && this.data[r][0] < this.data[smallest][0]) {
        smallest = r;
      }
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }

  get size() {
    return this.data.length;
  }
}

var kSmallestPairs = function (nums1, nums2, k) {
  if (!nums1.length || !nums2.length || k === 0) return [];

  const heap = new MinHeap();
  const res = [];

  const limit = Math.min(k, nums1.length);
  for (let i = 0; i < limit; i++) {
    heap.push([nums1[i] + nums2[0], i, 0]);
  }

  while (k-- > 0 && heap.size > 0) {
    const [sum, i, j] = heap.pop();
    res.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length) {
      heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }

  return res;
};
