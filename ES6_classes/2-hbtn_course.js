class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(_newName) {
    try {
      throw new TypeError('Name must be a string');
    } catch (error) {
      console.log(error.name);
    }
  }

  get name() {
    return this._name;
  }

  set length(_newLength) {
    try {
      throw new TypeError('Length must be a number');
    } catch (error) {
      console.log(error.name);
    }
  }

  get length() {
    return this._length;
  }

  set students(_newStudents) {
    try {
      throw new TypeError('newStudents must be array');
    } catch (error) {
      console.log(error.name);
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
