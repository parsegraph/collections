/* eslint-disable require-jsdoc */

export default function Float32List() {
  this.data = new Float32Array(8);
  this._length = 0;
}

Float32List.prototype.push = function(...args) {
  for (let i = 0; i < args.length; ++i) {
    if (this._length == this.data.length) {
      const created = new Float32Array(2 * this.data.length);
      for (let i = 0; i < this.data.length; ++i) {
        created[i] = this.data[i];
      }
      this.data = created;
    }
    const v = args[i];
    if (Number.isNaN(v)) {
      throw new Error('Pushed value is NaN');
    }
    this.data[this._length++] = v;
  }
};

Float32List.prototype.clear = function() {
  this._length = 0;
};

Float32List.prototype.length = function() {
  return this._length;
};

Float32List.prototype.slice = function() {
  return this.data.subarray(0, this._length);
};
