class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (sqft === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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
    throw new Error('override evacuationWarningMessage');
  }
}

export default Building;
