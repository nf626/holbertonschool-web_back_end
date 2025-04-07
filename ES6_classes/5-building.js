class Building {
  constructor(sqft) {
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
    if (!this._sqft) {
      Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

export default Building;
