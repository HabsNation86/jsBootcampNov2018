const notes = ['Hamster', 'Note2', 'Note3']
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

notes.splice(1,1,0, 'new second item')
console.log(notes)