const users = require('./data')


function allLanguages() {
  var languages = []
  users.map(function (user) {
    return user.favoriteLanguages.map(function (language) {
    languages.push(language) 
    })
  })
  return languages
}
allLanguages() 