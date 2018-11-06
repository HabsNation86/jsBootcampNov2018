let myAccnt = {
  name: 'Rambo Dumbo',
  expenses:0,
  income: 0,
}

let addExpense = function(account,total){

  account.expenses = account.expenses + total


}

// addExpense(myAccnt, 2.5)
// console.log(myAccnt)

// addIncome
// reset Account( reset expenses and income to 0)
// getAccntSummary ()

// Account for Andrew has $900.$1000 income. $100 is expenses

// addIncome
// add expense

let addIncome = function (account,income){
  myAccnt.income = myAccnt.income + income
}
let resetAccnt = function (account){
  myAccnt.expenses = 0,
  myAccnt.income = 0
}

let getAccntSummary = function(account) {
  let balance = myAccnt.income - myAccnt.expenses
  return `${myAccnt.name} has $${balance}.`
}




resetAccnt(myAccnt)
console.log(myAccnt)

addIncome(myAccnt, 3400)
console.log(myAccnt)

console.log(getAccntSummary(myAccnt))
