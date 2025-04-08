class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw new Error('Size not number');
    }
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new Error('newLocation not string');
    }
    this._location = newLocation;
  }

  valueOf() {
    return `${this._size}`;
  }

  toString() {
    return `${this._location}`;
  }
}

export default HolbertonClass;
