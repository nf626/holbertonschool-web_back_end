class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    return this._sql;
  }
}

export default Building;
