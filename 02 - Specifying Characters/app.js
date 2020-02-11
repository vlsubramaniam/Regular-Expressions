/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = [
  '801-766-9754',
  '801-545-5454',
  '435-666-1212',
  '801-796-8010',
  '435-555-9801',
  '801-009-0909',
  '435-222-8013',
  '801-777-6655'
]

const regEx801 = /801-/
const phoneNums801 = phoneNums.filter(val => regEx801.test(val))
console.log(phoneNums801)
