export class Stack {
  constructor(limit = 20) {
    this.size = 0;
    this.storage = {};
    this.limit = limit;
  }

  cutFirstValue() {
    const newStorage = {};

    for (let i = 2; i <= this.size; i++) {
      newStorage[i - 1] = this.storage[i];
    }

    this.size = this.size - 1;
    this.storage = newStorage;
  }

  push(data) {
    if (this.size === this.limit) {
      this.cutFirstValue();
    }
    this.size = this.size + 1;
    this.storage[this.size] = data;
  }

  pop() {
    let deletedData = [];

    if (this.size) {
      deletedData = this.storage[this.size];

      delete this.storage[this.size];
      this.size = this.size - 1;
    }
    return deletedData;
  }
}
