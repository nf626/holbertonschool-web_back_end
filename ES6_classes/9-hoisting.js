// eslint-disable-next-line max-classes-per-file
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if (typeof newYear !== 'number') {
      throw new Error('newYear not number');
    }
    this._year = newYear;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new Error('newLocation not string');
    }
    this._location = newLocationL;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string') {
      throw new Error('FirstName not string');
    }
    this._firstName = newFirstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(newLastName) {
    if (typeof newLastName !== 'string') {
      throw new Error('LastName not string');
    }
    this._lastName = newLastName;
  }

  fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
