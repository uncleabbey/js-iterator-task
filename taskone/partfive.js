const users = require('./data')

function hasFavoriteEditor(editor) {
  return users.some(function(user) {
    return user.favoriteEditor === editor
  })
}


hasFavoriteEditor('VS Code');