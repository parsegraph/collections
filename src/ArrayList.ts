export default class ArrayList<T> {
  _data: T[];
  _length: number;

  constructor() {
    this._data = [];
    this._length = 0;
  }

  clear() {
    this._length = 0;
  }

  length() {
    return this._length;
  }

  slice() {
    return this._data.slice(0, this.length());
  }

  forEach(cb:(val:T, index:number)=>void) {
    for (let i = 0; i < this.length(); ++i) {
      cb(this.at(i), i);
    }
  }

  concat<U extends T = T>(other:ArrayList<U>) {
    other.forEach(val=>this.push(val));
  }

  push(...args:T[]) {
    for (let i = 0; i < args.length; ++i) {
      if (this._length == this._data.length) {
        this._data.push(args[i]);
      } else {
        this._data[this._length] = args[i];
      }
      this._length++;
    }
  }

  at(i: number):T {
    if (i >= this._length || i < 0) {
      throw new Error('Index out of bounds: ' + i);
    }
    return this._data[i];
  }
}
