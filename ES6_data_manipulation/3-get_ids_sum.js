function getStudentIdsSum(getListStudents) {
  // eslint-disable-next-line max-len
  const total = getListStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return total;
}

export default getStudentIdsSum;
