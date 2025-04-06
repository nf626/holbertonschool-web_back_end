class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.error('TypeError: Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      console.error('Not number');
    }
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      console.error('Not array');
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
