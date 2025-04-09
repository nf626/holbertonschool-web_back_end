function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const studentId = getListStudents.map((item) => {
    const idList = item.id;
    console.log(idList);
    return idList;
  });

  return studentId;
}

export default getListStudentIds;
