export default class Float32List {
  _data: Float32Array;
  _length: number;

  constructor(initialSize: number = 8) {
    this._data = new Float32Array(initialSize);
    this._length = 0;
  }

  push(...args: number[]) {
    for (let i = 0; i < args.length; ++i) {
      if (this._length == this._data.length) {
        const created = new Float32Array(2 * this._data.length);
        for (let i = 0; i < this._data.length; ++i) {
          created[i] = this._data[i];
        }
        this._data = created;
      }
      const v = args[i];
      if (Number.isNaN(v)) {
        throw new Error("Pushed value is NaN");
      }
      this._data[this._length++] = v;
    }
  }

  clear() {
    this._length = 0;
  }

  length() {
    return this._length;
  }

  slice() {
    return this._data.subarray(0, this._length);
  }
}
