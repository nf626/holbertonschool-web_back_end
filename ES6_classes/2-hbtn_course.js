class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(_newName) {
    try {
      if (typeof _newName === 'string') {
        this._name = _newName;
      } else {
        throw new TypeError('Name must be a string');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  get name() {
    return this._name;
  }

  set length(_newLength) {
    try {
      if (typeof _newLength === 'number') {
        this._length = _newLength;
      } else {
        throw new TypeError('Length must be a number');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  get length() {
    return this._length;
  }

  set students(_newStudents) {
    try {
      if (Array.isArray(_newStudents)) {
        this._students = _newStudents;
      } else {
        throw new TypeError('newStudents must be array');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
