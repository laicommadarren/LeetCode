const strs1 = ["stop","pots","reed","","tops","deer","opts",""]

var groupAnagrams = function (strs) {
    let letterCounts = [];
    for (let i = 0; i < strs.length; i++) {
        let letterCount = {};
        for (let j = 0; j < strs[i].length; j++) {
            if (letterCount[strs[i][j]]) {
                letterCount[strs[i][j]] += 1;
            }
            else { letterCount[strs[i][j]] = 1 };
        }
        letterCounts.push(letterCount);
    }
    let outputByIndex = [[strs[0]]];
    let outputByLetterCounts = [letterCounts[0]];
    for (let k = 1; k < letterCounts.length; k++) { // this iterates through the letterCounts array
        let notMatching = false; // we want to compare each object inside to the objects inside output
        for (let l = 0; l < outputByLetterCounts.length; l++) {
            console.log(`l = ${l}`)
            console.log(outputByLetterCounts[l]);
            console.log(letterCounts[k]);
            console.log(Object.keys(outputByLetterCounts[l]).length);
            console.log(Object.keys(letterCounts[k]).length);
            if (Object.keys(outputByLetterCounts[l]).length == 0 && Object.keys(letterCounts[k]).length == 0) {
                notMatching = false;

            }
            for (key in outputByLetterCounts[l]) {
                if (letterCounts[k][key] !== outputByLetterCounts[l][key]) {
                    console.log(`not matching at l = ${l}`)
                    notMatching = true;
                    break;
                }
                notMatching = false;
            }
            if (!notMatching) {
                if (strs[k].length !== outputByIndex[l][0].length) {
                    notMatching = true;
                    break;
                }
                console.log(`matching at l = ${l}`);
                outputByIndex[l].push(strs[k]);
                console.log(outputByIndex);
                break;

            }
        }
        if (notMatching) {
            outputByIndex.push([strs[k]]);
            console.log(outputByIndex);
            outputByLetterCounts.push(letterCounts[k]);
            console.log(outputByLetterCounts);
        }

    }
    return outputByIndex;
};
console.log("output")
console.log(groupAnagrams(strs1));