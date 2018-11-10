const notes = [{
  title: 'book1',
  body: 'random info'
},{
  title: 'book2',
  body: 'generic information'
},{
  title:'book3',
  body:' Cant get a job'
}]
// console.log(notes)

// // length of array
// console.log(notes.length)


// console.log(notes[notes.length - 2])
// console.log(notes[1])

// notes.push('Alfie')
// console.log(notes)
// notes.pop()
// console.log(notes)


// notes.unshift('Donkey')
// console.log(notes)
// notes.shift()
// console.log(notes)

// notes.splice(1,1,0, 'new second item')



// notes.forEach(function(){
//   console.log(notes)
// })


// for (let i = notes.length-1; i >= 0; i--){
//   console.log(notes[i])
// }


// looking for an element in array of objects
// const index = notes.findIndex(function(note, index) {
//   return note.body === 'generic information'
// })
// console.log(index)

//  important note, use "indexOf" when working with array or strings


// Filtering Array
// const findNotes = function(notes, query){
// return notes.filter(function(note,index) {
//   const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//   const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//   return isTitleMatch || isBodyMatch

// })
// }
// console.log(findNotes(notes, 'book'))

// Sorting Array



