class Building {
  constructor(sqft) {
    super(sqft);
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
    return `Error: Class extending Building must override evacuationWarningMessage`;
  }
}

export default Building;
