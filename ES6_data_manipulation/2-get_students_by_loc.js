function getStudentsByLocation(getListStudents, city) {
  const locate = getListStudents.filter((getListStudents) => {
    return getListStudents.location === city;
  });
  return locate;
}

export default getStudentsByLocation;
