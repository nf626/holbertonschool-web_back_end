class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be array of string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new Error('Students must be array of string');
    }
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
