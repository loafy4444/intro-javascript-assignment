function employee (name, manager) {
  return {
    name: name,
    manager: manager
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */

// high order filtering
 // function highOrderUnderlings (manager, employees) {
 //   function hasManager (employee) {
 //     return employee.manager === manager
 //   }
 //   return employees.filter(hasManager)
 // }

// filtering
// function underlings (manager, employees) {
//   let result = []
//   for (let employee of employees) {
//     if (employee.manager === manager) {
//       result.push(employee)
//     }
//   }
//   return result
// }

// high order mapping / transforming
// function highOrderNames (employees) {
//   function getName (employee) {
//     return employee.name
//   }
//   return employees.map(getName)
// }

// mapping / transforming
// function names (employees) {
//   let result = []
//   for (let employee of employees) {
//     result.push(employee.name)
//   }
//   return result
// }

// high order itterating / foreach
// function highOrderLog (names) {
//   names.forEach(n => console.log(n))
// }

// itterating / foreach
// function log (names) {
//   for (let name of names) {
//     console.log(name)
//   }
// }

// log(name(underlings(manager, employees)))
// function logUnderlingNames (manager, employees) {
//   employees
//     .filter(function (e) { return e.manager === manager })
//     .map(function (e) { return e.name })
//     .filter(function (name) { return name.length > 5 })
//     .forEach(n => console.log(n))
// }

function logUnderlingNames (manager, employees) {
  employees.filter(e => e.manager === manager).map(e => e.name).forEach(n => console.log(n))
}

function groupByManagerName (employees) {
  let managers = {}
  employees.filter(e => e.manager !== undefined).map(e => e.manager)
    .forEach(m => managers[m.name] = employees.filter(e => e.manager === m))
  return managers
}

module.exports = {
  employee: employee,
  logUnderlingNames: logUnderlingNames,
  groupByManagerName: groupByManagerName
}
