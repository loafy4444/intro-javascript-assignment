'use strict'
const lib = require('./lib')
const employee = lib.employee
const logUnderlingNames = lib.logUnderlingNames
const groupByManagerName = lib.groupByManagerName

const brad = employee('brad')

const frank = employee('frank', brad)
const peter = employee('peter', frank)
const michael = employee('michael', frank)
const dillon = employee('dillon', frank)

const ed = employee('ed', brad)
const mandy = employee('mandy', ed)
const chris = employee('chris', ed)

const employees = [
  brad,
  frank,
  ed,
  peter,
  michael,
  dillon,
  mandy,
  chris
]

console.log(`brad's underlings: `)
logUnderlingNames(brad, employees)
console.log(`frank's underlings: `)
logUnderlingNames(frank, employees)
console.log(`ed's underlings: `)
logUnderlingNames(ed, employees)

// console.log(`brad's underlings: ${JSON.stringify(underlings(brad, employees), null, 2)}`)
// console.log(`frank's underlings: ${JSON.stringify(underlings(frank, employees), null, 2)}`)
// console.log(`ed's underlings: ${JSON.stringify(underlings(ed, employees), null, 2)}`)

console.log(groupByManagerName(employees))
