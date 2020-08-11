const users = require('./data')


function findHometownByState(state) {
  return users.filter(function(user) {
    return user.hometown.state === state
  })[0]
}

findHometownByState('CA')