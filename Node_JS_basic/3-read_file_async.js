// Async (Non-blocking) - use readFile
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }

      const response = [];
      let message;

      const content = data.toString().split('\n');

      let students = content.filter((item) => item);

      students = students.map((item) => item.split(', '));

      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
      message = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(message);

      response.push(message);

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
        message = `Number of students in ${key}:
        ${fields[key].length}. List: ${fields[key].join(', ')}`;
        console.log(message);
        response.push(message);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
