// Create array with 5 items
// return how many to-do items you have
// print the first and 2nd to last items and have ex. todo : walk the dog


const item = ['Dog','Cat','Hamster',34,{age: 32,
height: '6feet'}];

// console.log(`you have ${item.length} items`)

// console.log('The first item is:', item[0])
// console.log('The fourth item is:', item[3])


// delete 3rd item from item

item.splice(2,1)
console.log(item)

//  add new item at the end
item.push('Doberman')
console.log(item)

//  remove the first item from list
item.shift()
console.log(item)