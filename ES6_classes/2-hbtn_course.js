class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newName) {
    try {
      if (typeof newName === 'string') {
        this._name = newName;
      }
    } catch (error) {
      console.log(error instanceof TypeError);
    }
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    try {
      if (typeof newLength === 'number') {
        this._length = newLength;
      }
    } catch (error) {
      console.log(error instanceof TypeError);
    }
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    try {
      if (Array.isArray(newStudents)) {
        this._students = newStudents;
      }
    } catch (error) {
      console.log(error instanceof TypeError);
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
