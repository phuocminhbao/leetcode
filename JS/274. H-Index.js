/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
    const sortedCitations = citations.toSorted((a, b) => b - a);
    for (let paper = 0; paper < citations.length; paper++) {
        if (paper + 1 > sortedCitations[paper]) {
            return paper;
        }
    }
    return citations.length;
};

const citations = [11, 15];
console.log(hIndex(citations));
