// how to remove element

// const h1 = document.querySelector('h1')
// h1.remove()

// query all and remove
const p = document.querySelectorAll('p')
  p.forEach(function(p){
  console.log(p.textContent)
  p.textContent = 'Rambo'

})


//  Add a new element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)