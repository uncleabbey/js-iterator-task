

function removeVowels(word) {
  word = word.split()
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return word.filter(function(item){
    return !vowels.includes(item)
  })
}


