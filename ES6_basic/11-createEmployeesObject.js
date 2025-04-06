export default function createEmployeesObject(departmentName, employees) {
  let idx = 0;
  for (const value of employees) {
    const emp = employees;
    emp[idx] = value;
    idx += 1;
  }
  return {
    [`${departmentName}`]: employees,
  };
}
