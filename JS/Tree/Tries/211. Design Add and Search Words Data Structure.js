class TrieNode {
    /**
     * @type {Object<string, TrieNode>}
     */
    childrenMap;

    /**
     * @type {boolean}
     */
    isEndOfWord;

    /**
     * Creates an instance of TrieNode.
     *
     * @constructor
     */
    constructor(isEndOfWord = false) {
        this.childrenMap = {};
        this.isEndOfWord = isEndOfWord;
    }

    /**
     * @param {string} character
     * @returns {TrieNode}
     */
    getNode(character) {
        return this.childrenMap[character];
    }

    /**
     * @param {string} character
     * @param {TrieNode} node
     */
    insert(character, node) {
        this.childrenMap[character] = node;
    }
}

class WordDictionary {
    #root;
    constructor() {
        this.#root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currNode = this.#root;
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            const isEndOfWord = i === word.length - 1;
            const characterNode = currNode.getNode(character);
            if (characterNode) {
                currNode = characterNode;
            } else {
                const newNode = new TrieNode();
                currNode.insert(character, newNode);
                currNode = newNode;
            }
            isEndOfWord && (currNode.isEndOfWord = true);
        }
        return null;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const subSearch = (subWord, node) => {
            let currentNode = node;
            for (let i = 0; i < subWord.length; i++) {
                const character = subWord[i];
                const isEndOfWord = i === subWord.length - 1;
                if (character !== ".") {
                    const characterNode = currentNode.getNode(character);
                    if (characterNode) {
                        if (isEndOfWord) {
                            return characterNode.isEndOfWord;
                        }
                        currentNode = characterNode;
                    } else {
                        return false;
                    }
                } else {
                    const remainingWord = subWord.substring(i + 1);
                    for (const character in currentNode.childrenMap) {
                        const characterNode = currentNode.getNode(character);
                        if (isEndOfWord && characterNode.isEndOfWord) {
                            return true;
                        }
                        const subRes = subSearch(remainingWord, characterNode);
                        if (subRes) {
                            return subRes;
                        }
                    }
                    return false;
                }
            }
            return false;
        };
        return subSearch(word, this.#root);
    }
}

const wordDictionary = new WordDictionary();
const actions = [
    "addWord",
    "addWord",
    "addWord",
    "addWord",
    "search",
    "search",
    "addWord",
    "search",
    "search",
    "search",
    "search",
    "search",
    "search",
];
const inputs = [
    ["at"],
    ["and"],
    ["an"],
    ["add"],
    ["a"],
    [".at"],
    ["bat"],
    [".at"],
    ["an."],
    ["a.d."],
    ["b."],
    ["a.d"],
    ["."],
];

const res = actions.map((action, i) => wordDictionary[action](inputs[i][0]));
console.log(res);
