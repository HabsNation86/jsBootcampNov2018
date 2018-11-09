const getPortability = function(origPrice,currLoanBal,currAmort, newPrice, newLoanBal,newAmort){
  if ( newAmort > currAmort){
    return `New amortization can be a maximum of ${currAmort} months`
  }else if ((currLoanBal/origPrice) >= (currLoanBal/newPrice)){
    return 'There is no premium to be charged'
  } else {
    let newFunds = newLoanBal - currLoanBal
    if ((newLoanBal/newPrice) >= .901){
      return 'Premium is (newFunds * 0.063)'
    } else if ((newLoanBal/newPrice) >= .851) {
      return 'Premium is (newFunds * 0.0625)'
    } else {
      return '$500'
    }
  }
}

console.log(getPortability(200000,10000,250,260000,210000,250))