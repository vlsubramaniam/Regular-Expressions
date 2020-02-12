let data = '2018-3-9'
/* Non-capturing group --> ?: 
Non-capturing group are not included in the exec array result
In the below example year is undefined in the array as it is a non capturing group
*/

let reg = /^(?:\d\d\d\d)([-./])(\d{1,2})\1(\d{1,2})$/,
  arr = reg.exec(data),
  year,
  month,
  day
console.log('Exec Array - ', arr)
if (reg.test(data)) {
  year = arr[1]
  month = arr[2]
  day = arr[3]
  console.log('Year - ', year)
  console.log('Month - ', month)
  console.log('Day - ', day)
} else {
  console.log('Wrong format')
}

const html =
  '<strong> This is a strong tag </strong> <i> This is italic tag </i>'
// const regExPal = /<(\w+>)[\w\s]+</\1/g -- This works in regexPal tool but not in javascript so we need to escape the character as below
const regExHtml = /<(\w+>)[\w\s]+<\/\1/g
console.log(html.match(regExHtml))
