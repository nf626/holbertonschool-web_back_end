/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filterStudent = getListStudents.filter((student) => student.location === city);

  const studentGrade = filterStudent.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    if (gradeObj) {
      student.grade = gradeObj.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });

  return studentGrade;
}

export default updateStudentGradeByCity;
