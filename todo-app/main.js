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

const incompleteTodos =  todos.filter(function(todo){
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
  const p =document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})