function getStudentIdsSum(getListStudents) {
  const total = getListStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return total;
}

export default getStudentIdsSum;
