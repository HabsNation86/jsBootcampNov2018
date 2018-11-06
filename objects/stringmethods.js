// let name = 'Jamie'

// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.split(''))


// let password = 'abc123password'

// console.log(password.includes('password'))

// let christmas = ' Humbug   !'
// console.log(christmas)
// console.log(christmas.trim())

// Challenge Area
// Check is word password is in password and length is atleast 8

// let isValid = function(password){
//   if (password.includes('password') || password.length < 8){
//     return 'Invalid password'
//   } else {
//     return 'Sweet password bro'
//   }
// }

// console.log(isValid('asdfp'))
// console.log(isValid('abc33444djkdfjkdjk'))
// console.log(isValid('aspassword768'))

let isPallandrome = function(str){
  let reverse = str.split('').reverse().join('')
  if (reverse === str){
    return true
  }else {
    return false
  }
}

console.log(isPallandrome('laval'))