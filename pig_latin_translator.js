function translate(message) {
  let words = message.split(' ');
  let translatedMessage = [];

  words.forEach(word => {
    let translatedWord = translateWord(word);
    translatedMessage.push(translatedWord);
  });

  return translatedMessage.join(' ');
};

function translateWord(word) {
  let firstLetter = word[0];

  if (firstLetterIsVowel(firstLetter)) {
    word = word.substring(1, word.length) + firstLetter + 'way';
  } else {
    word = word.substring(1, word.length) + firstLetter + 'ay';
  }

  return word;
};

function firstLetterIsVowel(firstLetter) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(firstLetter.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

console.log('message:', translate('hello how are you today'));
