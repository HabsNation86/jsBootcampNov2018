const todos = [{
  text: 'order cat food',
  completed: false
}, {
  text: 'clean kitchen',
  completed: true
}, {
  text: 'Buy Food',
  completed: false
}, {
  text: 'walk dog',
  completed: true
}]


// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph){
//   if (paragraph.textContent.includes('the')){
//     paragraph.remove()
//   }
// })


// You have 2 todo's left (p element)
//  add a p for each todo above ( use text value)



// getting incomplete todos
const incompleteTodos =  todos.filter(function(todo){
// since we want incomplete we ask for the OPPOSITE (!) of complete
  return !todo.completed
})


// create an h2 and name it summary
const summary = document.createElement('h2')
// add content to the h2 we created (now known as summary)
summary.textContent = `You have ${incompleteTodos.length} todos left`
// add the content (summary) into child element of "body"
document.querySelector('body').appendChild(summary)



// for each todo item...
todos.forEach(function(todo){
// create a paragraph "p"
  const p = document.createElement('p')
// inject the text from each todo into the "p" created previously
  p.textContent = todo.text
// add the content "p" to the child element of body
  document.querySelector('body').appendChild(p)
})

// add a button, make click listener and send message to console

document.querySelector('button').addEventListener("click", function(){
  console.log('aint nobody messing with my click')
})