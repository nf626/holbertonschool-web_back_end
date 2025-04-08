class Building {
  constructor(sqft) {
    if (sqft instanceof Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('newSqft is not number');
    }
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    if (this._sqft === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    return this._sqft;
  }
}

export default Building;
