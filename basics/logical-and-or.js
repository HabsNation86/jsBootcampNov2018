// let temp = 15

// if (temp <= 32 || temp >= 100){
//   console.log("weather is cray cray")
// } else {
//   console.log("safe to go out")
// }


let isGuestOneVegan = false
let isGuestTwoVegan = false

// are both vegan? offer both vegan
// at least one vegan? offer a vegan option
// else? offer anything but vegan

if (isGuestOneVegan && isGuestTwoVegan){
  console.log("Here are your vegan only options")
} else if (isGuestOneVegan || isGuestTwoVegan){
  console.log("Here is our mixed menu")
} else {
  console.log("Here is our regular menu")
}

