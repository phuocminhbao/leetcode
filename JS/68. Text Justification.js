/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const rawResult = [];
  const rawItem = [];
  let rawItemLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const length = word.length;
    if (rawItemLength + 1 + length >= maxWidth) {
      rawResult.push([...rawItem]);
      rawItem.length = 0;
      rawItemLength = 0;
      i = i - 1;
      continue;
    }
    if (i === words.length - 1) {
      rawItem.push(word);
      rawResult.push([...rawItem]);
      continue;
    }
    if (rawItem.length === 0) {
      rawItem.push(word);
      rawItemLength += length;
      continue;
    }
    rawItem.push(word);
    rawItemLength += 1 + length;
  }
  const formatWithSpaces = (line, index) => {
    if (index === rawResult.length - 1 || line.length === 1) {
      const lastWords = line.reduce((words, word, index) => {
        if (index === 0) {
          return words;
        }
        return `${words} ${word}`;
      }, line[0]);
      return `${lastWords}${" ".repeat(maxWidth - lastWords.length)}`;
    }

    const subFormat = (line, maxWidth) => {
      const wordLength = line.reduce((total, word) => {
        return (total += word.length);
      }, 0);
      const spaceAmount = line.length - 1;
      const isDivideEvenly = (maxWidth - wordLength) % spaceAmount === 0;

      if (isDivideEvenly) {
        const evenSpaces = (maxWidth - wordLength) / spaceAmount;
        return line.reduce((words, word, index) => {
          if (index === 0) {
            return words;
          }
          return `${words}${" ".repeat(evenSpaces)}${word}`;
        }, line[0]);
      }
      const mostRightSpace = Math.floor((maxWidth - wordLength) / spaceAmount);
      const mostRightWord = line[line.length - 1];
      const newLine = [...line];
      newLine.pop();
      return `${subFormat(
        newLine,
        maxWidth - mostRightSpace - mostRightWord.length
      )}${" ".repeat(mostRightSpace)}${mostRightWord}`;
    };
    return subFormat([...line], maxWidth);
  };
  return rawResult.map(formatWithSpaces);
};

const words = ["Listen", "to", "many,", "speak", "to", "a", "few."];
const maxWidth = 6;

console.log(fullJustify(words, maxWidth));
