class RandomizedSet {
  #set;
  #indexMap;
  #array;
  constructor() {
    this.#set = new Set();
    this.#indexMap = {};
    this.#array = [];
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.#set.has(val)) {
      return false;
    }
    this.#set.add(val);
    this.#array.push(val);
    this.#indexMap[val] = this.#array.length - 1;
    return true;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.#set.has(val)) {
      return false;
    }
    this.#set.delete(val);
    this.#swapWithLastItem(this.#indexMap[val]);
    this.#array.pop();
    delete this.#indexMap[val];
    return true;
  }

  #swapWithLastItem(a) {
    this.#indexMap[this.#array[this.#lastIndex()]] = a;
    const temp = this.#array[a];
    this.#array[a] = this.#array[this.#lastIndex()];
    this.#array[this.#lastIndex()] = temp;
  }

  #lastIndex() {
    return this.#array.length - 1;
  }
  /**
   * @return {number}
   */
  getRandom() {
    const random = Math.floor(Math.random() * (this.#lastIndex() + 1));
    return this.#array[random];
  }
}
const obj = new RandomizedSet();
obj.insert(0);
obj.insert(1);
obj.remove(0);
obj.insert(2);
obj.remove(1);
console.log(obj.getRandom());
