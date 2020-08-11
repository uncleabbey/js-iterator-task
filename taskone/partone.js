const users = require('./data')


function printEmails (arr) {
  return arr.map(function(user) {
    console.log(user.email);
  })
}

printEmails(users)