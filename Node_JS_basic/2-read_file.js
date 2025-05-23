const fs = require('fs');

function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.toString().split('\n');

  let students = content.filter((item) => item);

  students = students.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fields = {};
  for (const student in students) {
    if (student !== 0) {
      if (!fields[students[student][3]]) {
        fields[students[student][3]] = [];
      }
      fields[students[student][3]].push(students[student][0]);
    }
  }

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
