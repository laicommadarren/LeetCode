const s1 = "bbbbbb"

var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) return 0;
    if (s.length == 1) return 1;
    let maxLength = 1;
    let leftIndex = 0;
    let rightIndex = 1;
    let checkRepeats = {};
    console.log(s[leftIndex]);
    checkRepeats[s[leftIndex]] = 0;
    console.log(checkRepeats)
    while (rightIndex < s.length) {
        if (!checkRepeats.hasOwnProperty(s[rightIndex]) || checkRepeats[s[rightIndex]] < leftIndex) {
            checkRepeats[s[rightIndex]] = rightIndex;
            console.log(`rightIndex : ${rightIndex}`)
            if (rightIndex - leftIndex + 1 > maxLength) {
                maxLength = rightIndex - leftIndex + 1;
            }
            rightIndex++;
        }
        else {
            leftIndex = checkRepeats[s[rightIndex]] + 1;
            console.log(`leftIndex: ${leftIndex}`)
            checkRepeats[s[rightIndex]] = rightIndex;
            console.log(checkRepeats)
            console.log(`checkRepeats[s[rightIndex]]: ${checkRepeats[s[rightIndex]]}`)
            
            if (rightIndex - leftIndex + 1 > maxLength) {
                maxLength = rightIndex - leftIndex + 1;
            }
            rightIndex++;
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring(s1));