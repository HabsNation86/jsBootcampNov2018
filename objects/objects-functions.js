let myBook = {
  title: 'Don Cherry',
  author: 'Doug Parr',
  pageCount: '345'
}

let otherBook = {
  title: 'Job',
  author: 'Yankee Doodle',
  pageCount: '335'
}

let getSummary = function(book){
  console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)

// Challenege area
// create function, take fahrenheit in
// return object with all three

let fahrToObj = function(fahr){
  return {
    fahrenheit: fahr,
    kelvin: (fahr = 459.67) * (5/9),
    celsius: (fahr - 32) * (5/9)
  }
}

console.log(fahrToObj