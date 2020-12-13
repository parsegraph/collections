export default class ArrayList {
  constructor() {
    this.data = [];
    this._length = 0;
  }

  clear() {
    this._length = 0;
  };

  length() {
    return this._length;
  };

  slice() {
    return this.data.slice(0, this._length);
  };

  concat(other) {
    for (let i = 0; i < other.length(); ++i) {
      this.push(other.at(i));
    }
  };

  push(...args) {
    for (let i = 0; i < args.length; ++i) {
      if (this._length == this.data.length) {
        this.data.push(args[i]);
      } else {
        this.data[this._length] = args[i];
      }
      this._length++;
    }
  };

  at(i) {
    if (i >= this._length || i < 0) {
      throw new Error('Index out of bounds: ' + i);
    }
    return this.data[i];
  };
}
