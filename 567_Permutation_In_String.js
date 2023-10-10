var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length ) {
        return false;
    }
    // eidbaooo
    let s1Map = new Map();
    for (letter of s1) {
        if (!s1Map.has(letter)) s1Map.set(letter, 1);
        else s1Map.set(letter, s1Map.get(letter) + 1);
    }
    // iterate through the s2 until we find a letter that is in the map of the s1
    let startIndex = 0;
    for (i=0; i<s2.length - s1.length + 1; i++) {
        if (s1Map.has(s2[i])) {
            // console.log("start s1 check")
            startIndex = i;
            let tempMap = new Map(s1Map);
            for (j=i; j< i + s1.length; j++) {
                // console.log(tempMap)
                // console.log(s2[j]);
                if (!tempMap.has(s2[j])) {
                    // console.log("I made it to this if statement");
                    break
                }
                else {
                    // console.log("did it");
                    if (tempMap.get(s2[j]) === 0) {
                        // console.log("haha I made it here");
                        break;
                    }
                    tempMap.set(s2[j], tempMap.get(s2[j]) - 1);
                }
                if (j=== i + s1.length - 1) return true;
                
            }
        }
        
    }

    // we compare substring starting at the letter that is a match, to the map
    return false;
    
};