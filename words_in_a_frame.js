let words = ['Hello', 'World', 'in', 'a', 'frame'];

let longestWordLength = words.reduce(function (a, b) {
  return a.length > b.length ? a : b;
}).length;

let border = function () {
  let frame = '';
  let length = frame.length;

  while (length < longestWordLength) {
    frame += '*';
    length = frame.length;
  }

  frame += '****';
  return frame;
};

console.log(border());

words.forEach(word => {
  let length = word.length;

  while (length < longestWordLength) {
    word += ' ';
    length = word.length;
  }

  word = '* ' + word + ' *';
  console.log(word);
});

console.log(border());
