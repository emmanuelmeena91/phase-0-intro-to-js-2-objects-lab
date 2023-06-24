// Write your solution in this file!

const = employee {
    name: "Emmanuel",
    streetAddress: "254 nrb"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
     // Return a new object with the updated key-value pair using the spread operator 

return{
    ...employee,//spread operator
    [key]: value
};

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }


 function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }