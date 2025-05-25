import readDatabase from '../utils';

class StudentsController {
  // get all students
  static getAllStudents(request, response, db) {
    const message1 = 'This is the list of our students';
    readDatabase(db)
      .then((fields) => {
        const students = [];
        let message;

        students.push(message1);

        for (const key of Object.keys(fields)) {
          message = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(',')}`;

          students.push(message);
        }
        response.send(200, `${students.join('\n')}`);
      }).catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, db) {
    const { major } = request.params;

    // get major
    if (major === 'CS' || major === 'SWE') {
      readDatabase(db)
        .then((fields) => {
          const students = fields[major];
          response.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => {
          response.send(500, 'Cannot load the database');
        });
    } else {
      response.send(500, 'Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
