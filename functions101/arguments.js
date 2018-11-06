//  Challenge area
//  using = in argument sets the default

let tipCalc = function (cost = 1, tip = .15){
  let tipPercent = tip * 100
  let tipTotal = cost * tip
  return `Tip is ${tipPercent}% and Dollar total is ${tipTotal}$`
}




