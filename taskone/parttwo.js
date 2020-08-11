const users = require('./data')


function printHobbies (arr) {
  return arr.map(function(user) {
    return user.hobbies.map(function(hobby) {
      console.log(hobby);
    });
  })
}

printHobbies(users)