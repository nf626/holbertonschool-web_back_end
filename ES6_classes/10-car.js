class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand !== 'string') {
      throw new Error('newBrand not string');
    }
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor !== 'string') {
      throw new Error('newMotor not string');
    }
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor !== 'string') {
      throw new Error('newColor not string');
    }
    this._color = newColor;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

export default Car;
