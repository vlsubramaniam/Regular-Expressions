/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

const data = [
  'Jensen, Dale',
  'Smith, Andrea',
  'Jorgensen, Michael',
  'Vasefi, Annika',
  'Lopez, Monica',
  'Crockett, Steven'
]

const regExNames = /(\w+), (\w+)/
const newData = data.map(name => {
  const arr = regExNames.exec(name)
  if (arr) {
    return arr[2] + ' ' + arr[1]
  } else {
    return null
  }
})

console.log(newData)
