function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!newGrades.grade) {
    newGrades.grade = 'N/A';
    console.log(newGrades);
  }
  const studentGrade = getListStudents.map((item) => {
    const grad = item;
    return grad;
  });

  const newStudent = studentGrade.filter((studentGrade) => studentGrade.location === city);
  return newStudent;
}

export default updateStudentGradeByCity;
