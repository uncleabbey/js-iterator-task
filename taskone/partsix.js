const users = require('./data')


function findByUsername(name) {
  return users.filter(function(user) {
    return user.username === name
  })[0]
}

findByUsername('david');
