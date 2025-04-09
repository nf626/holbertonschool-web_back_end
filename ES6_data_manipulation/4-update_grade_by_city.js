/* eslint-disable max-len */
function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const filterStudent = getListStudents.filter((student) => student.location === city);

  const studentGrade = filterStudent.map((student) => {
    const grad = newGrades.find((grade) => grade.id === student.id);

    if (grad) {
      student.grade = grad.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });

  return studentGrade;
}

export default updateStudentGradeByCity;
