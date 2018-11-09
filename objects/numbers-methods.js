// let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.ceil(num))
// console.log(Math.floor(num))


// Extremely important algorithm to remember



// Challenge area
// range 1-5 - true if correct

let guessingGame = function(guess){
  let secretNumber = 4
  if (guess === secretNumber){
    return 'Bingo, good guess'
  } else {
    return 'Wrong, try again'
  }
}

let min = 1
let max = 5

let random = Math.floor(Math.random() * (max - min + 1)) + min


console.log(random)
console.log(random)
console.log(random)
console.log(random)