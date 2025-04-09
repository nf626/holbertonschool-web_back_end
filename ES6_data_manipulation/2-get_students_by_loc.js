function getStudentsByLocation(getListStudents, city) {
  const locate = getListStudents.filter((getListStudents) => getListStudents.location === city);
  return locate;
}

export default getStudentsByLocation;
