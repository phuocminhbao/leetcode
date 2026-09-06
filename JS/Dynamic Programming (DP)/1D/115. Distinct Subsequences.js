/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
    const memoi = {};
    const dp = (index, currLength) => {
        if (memoi[`${index}-${currLength}`] !== undefined) {
            return memoi[`${index}-${currLength}`];
        }
        if (currLength === t.length) {
            return 1;
        }
        if (index >= s.length) {
            return 0;
        }
        const sChar = s.charAt(index);
        const tChar = t.charAt(currLength);
        let total = 0;
        if (sChar === tChar) {
            total += dp(index + 1, currLength + 1);
        }
        total += dp(index + 1, currLength);
        memoi[`${index}-${currLength}`] = total;
        return total;
    };
    return dp(0, 0);
};

const s =
    "xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo";
const t = "rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys";
const res = numDistinct(s, t);
debugger;
