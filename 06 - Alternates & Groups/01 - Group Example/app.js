const data = '2018-3-9'
const regEx = /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})$/
const arr = regEx.exec(data)

if (regEx.test(data)) {
  console.log('Year - ', arr[1], 'Month - ', arr[2], 'Day - ', arr[3])
} else {
  console.log('Wrong format')
}

let text = 'He picked apples of the apple tree'
let appleReg = /\bapples?\b/g
const appleArr = text.match(appleReg)
console.log(appleArr)
