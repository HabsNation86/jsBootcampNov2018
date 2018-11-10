const account = {
  name: 'Andrew Mead',
  expenses: [],
  income: [],
  addExpense: function(description,amount){
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function(){
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0

    this.expenses.forEach(function(expense){
      totalExpenses = totalExpenses + expense.amount
    })
    this.income.forEach(function(income){
      totalIncome = totalIncome + income.amount
    })

    accountBalance = totalIncome - totalExpenses


    return `${this.name} has ${accountBalance} , $${totalIncome}`
  },
  addIncome: function(description,amount){
    this.income.push({
      description: description,
      amount: amount
    })
  }
}




account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Coffee', 2)
console.log(account.getAccountSummary())


// Part 2

// add income array to account
//  addIncome => description and amount
// tweak getASummary
//  print out andrew mead has getAccountSummary,

