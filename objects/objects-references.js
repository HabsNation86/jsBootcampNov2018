let myAccnt = {
  name: 'Rambo Dumbo',
  expenses:0,
  income: 0,
}

let addExpense = function(account,total){

  account.expenses = account.expenses + total


}

addExpense(myAccnt, 2.5)
console.log(myAccnt)