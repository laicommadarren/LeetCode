var minimumDeleteSum = function(s1, s2) {
    let object1 = {};
    let object2 = {};
    let object1mod = {};
    let object2mod = {};
    for(letter in s1) {
        object1[letter] += 1;
    }
    for(letter in s2){
        object2[letter] += 1;
    }
    for(key in object1){
        if (object1[key] > 0 && object2[key] > 0) {
            object1mod[key] = object1[key]-object2[key];
        }
        else if (object2[key] == undefined) {
            object1mod[key] = object1[key]
        }
    }
    for(key in object2){
        if (object1[key] > 0 && object2[key] > 0) {
            object2mod[key] = Math.abs(object1[key]-object2[key]);
        }
        else if (object1[key]== undefined) {
            object2mod[key] = object2[key]
        }
    }
    let removedSum1 = () => {
        const obj1 = Object.keys(object1mod).find(key => object1mod[key] > 0);
        let sum1;
        for (key in obj1) {
            sum1 += object1mod[key]*key.charCodeAt(0);
        }
        return 
    }

    
};

s1 = "delete"; // remove "de"
s2 = "leet";
console.log("a".charCodeAt(0));

console.log("2");