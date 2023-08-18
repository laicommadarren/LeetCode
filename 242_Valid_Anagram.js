const s1 = "aacc";
const t1 = "ccac";

const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let letterCount = {};
    for (let i = 0; i<s.length; i++) {
        if (letterCount[s[i]]) {
            letterCount[s[i]] += 1;
        }
        else {letterCount[s[i]] = 1};
    }
    console.log(letterCount);
    console.log(t.length);
    for (let j = 0; j<t.length; j++) {
        if (letterCount[t[j]]) {
            letterCount[t[j]] += -1;
            if (letterCount[t[j]] < 0) return false;
        }
        else {
            return false;
        }
    }
    return true;
};

console.log(isAnagram(s1, t1));