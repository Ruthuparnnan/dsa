var Twitter = function () {
  this.time = 0;
  this.follows = new Map();
  this.tweets = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweets.has(userId)) {
    this.tweets.set(userId, []);
  }
  this.tweets.get(userId).push([this.time++, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const res = [];
  const heap = [];
  const users = new Set();
  users.add(userId);

  if (this.follows.has(userId)) {
    for (let f of this.follows.get(userId)) {
      users.add(f);
    }
  }

  for (const user of users) {
    const list = this.tweets.get(user);
    if (list && list.length > 0) {
      const index = list.length - 1;
      const [time, tweetId] = list[index];
      heap.push([time, tweetId, user, index - 1]);
    }
  }

  heap.sort((a, b) => b[0] - a[0]);

  while (heap.length > 0 && res.length < 10) {
    const [time, tweetId, userId, index] = heap.shift();
    res.push(tweetId);

    if (index >= 0) {
      const [t, tid] = this.tweets.get(userId)[index];
      heap.push([t, tid, userId, index - 1]);
      heap.sort((a, b) => b[0] - a[0]);
    }
  }

  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followerId === followeeId) return;

  if (!this.follows.has(followerId)) {
    this.follows.set(followerId, new Set());
  }

  this.follows.get(followerId).add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    this.follows.get(followerId).delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
