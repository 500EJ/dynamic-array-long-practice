class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length + 1 > this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    this.length--;
    const lastElement = this.data[this.length];
    this.data[this.length] = undefined;
    return lastElement;
  }

  shift() {
    const firstElement = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.length--;
    this.data[this.length] = undefined;
    return firstElement;
  }

  unshift(val) {
    if (this.length + 1 > this.capacity) this.resize();
    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {
    const newArr = new Array(this.capacity * 2);
    for (let i = 0; i < this.data.length; i++) {
      newArr[i] = this.data[i];
    }
    this.capacity *= 2;
    this.data = newArr;
  }
}

module.exports = DynamicArray;
