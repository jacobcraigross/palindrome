var letters = [];
var word = 'racecar';
var rev_word = '';

for (var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++){
  rev_word += letters.pop();
}

if (word === rev_word){
  console.log(word + ' is a palindrome.');
}

else {
  console.log(word + ' is not a palindrome.')
}
