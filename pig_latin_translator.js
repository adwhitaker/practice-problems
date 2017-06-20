function translate(message) {
  return message.split(' ').map(word => translateWord(word)).join(' ');
};

function translateWord(word) {
  let firstLetter = word[0];
  let ending = firstLetterIsVowel(firstLetter) ? 'way' : 'ay';

  return word.substring(1, word.length) + firstLetter + ending;
};

function firstLetterIsVowel(firstLetter) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return vowels.includes(firstLetter.toLowerCase());
};

console.log('message:', translate('hello how are you today'));
