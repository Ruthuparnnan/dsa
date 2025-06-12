class RecentCounter {
  constructor() {
    this.queue = [];
  }

  ping(t) {
    this.queue.push(t);

    // Remove outdated pings
    while (this.queue[0] < t - 3000) {
      this.queue.shift(); // remove from front of the queue
    }

    return this.queue.length;
  }
}
