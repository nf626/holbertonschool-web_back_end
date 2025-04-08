class Building {
  /** The new.target meta-property lets you detect whether a function or
   * constructor was called using the new operator. In constructors and
   * functions invoked using the new operator, new.target returns a reference to
   * the constructor or function that new was called upon. In normal function calls,
   * new.target is undefined. */

  constructor(sqft) {
    if (new.target !== Building) {
      this.evacuationWarningMessage();
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

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
