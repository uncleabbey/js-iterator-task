function vowelCount(vowel) {
  vowel = vowel.split('');
  return vowel.reduce((acc, current) => {
    if (['a', 'e', 'i', 'o', 'u'].indexOf(current) >= 0) {
      !acc[current] ? (acc[current] = 1) : ++acc[current];
    }
    return acc;
  }, {});
}
vowelCount('awesome');
