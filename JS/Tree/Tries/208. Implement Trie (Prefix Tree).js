class TrieNode {
    /**
     * @type {Object<string, TrieNode>}
     */
    #childrenMap;

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
        this.#childrenMap = {};
        this.isEndOfWord = isEndOfWord;
    }

    /**
     * @param {string} character
     * @returns {TrieNode}
     */
    getNode(character) {
        return this.#childrenMap[character];
    }

    /**
     * @param {string} character
     * @param {TrieNode} node
     */
    insert(character, node) {
        this.#childrenMap[character] = node;
    }
}

class Trie {
    #root;
    constructor() {
        this.#root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currentNode = this.#root;
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            const isLastCharacter = i === word.length - 1;
            if (currentNode.getNode(character)) {
                currentNode = currentNode.getNode(character);
                isLastCharacter && (currentNode.isEndOfWord = true);
                continue;
            }
            const newNode = new TrieNode(isLastCharacter);
            currentNode.insert(character, newNode);
            currentNode = newNode;
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    search(word) {
        let currentNode = this.#root;
        for (let i = 0; i < word.length; i++) {
            const character = word[i];
            const node = currentNode.getNode(character);
            if (!node) {
                return false;
            }
            if (i === word.length - 1 && !node.isEndOfWord) {
                return false;
            }
            currentNode = node;
        }
        return true;
    }
    /**
     * @param {string} prefix
     * @return {boolean}
     */

    startsWith(prefix) {
        let currentNode = this.#root;
        for (let i = 0; i < prefix.length; i++) {
            const character = prefix[i];
            const node = currentNode.getNode(character);
            if (!node) {
                return false;
            }
            currentNode = node;
        }
        return true;
    }
}

const trie = new Trie();
const actions = [
    "insert",
    "search",
    "search",
    "startsWith",
    "insert",
    "search",
];
const inputs = [["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];

const res = actions.map((action, i) => trie[action](inputs[i][0]));
console.log(res);
