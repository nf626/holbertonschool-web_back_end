export default function createReportObject(employeesList) {
/* const allEmployees = {
    ...employeesList,
  };
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  }; */

  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
