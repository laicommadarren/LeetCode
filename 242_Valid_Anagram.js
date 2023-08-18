var isAnagram = function(s, t) {
    let letterCount1 = {};
    for (let i = 0; i<s.length; i++) {
        if (letterCount1[s[i]]) {
            letterCount1[s[i]] += 1;
        }
        else {letterCount1[s[i]] = 0};
    }
    for (let j = 0; j<t.length; t++) {
        if (letterCount1[t[j]]) {
            letterCount1[t[j]] += -1;
            if (letterCount1[t[j]] < 0) {
                return false;
            }
        }
        else if (!letterCount1[t[j]]) {
            return false;
        }
    }
    return true;
};