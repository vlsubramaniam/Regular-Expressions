const data =
    'allthingsjavascript.com google.com youtube.com https://facebook.com',
  regExSite = /(\w+)(?=.com)/g

console.log('Site Name - ', data.match(regExSite))

const passwordText = 'aAjj7uyu',
  regExPassword = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g

console.log('Password Match', regExPassword.test(passwordText))
