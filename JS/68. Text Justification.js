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
        if (rawItemLength + 1 + length > maxWidth) {
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
    const formatWithSpaces = (line, index) => {};
    return rawResult.map(formatWithSpaces);
};

const words = [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
];
const maxWidth = 20;

console.log(fullJustify(words, maxWidth));
