var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let str1={}
    let str2={}
    for(let i in s){
        str1[s[i]]=(str1[s[i]]||0)+1
    }
    console.log(str1)
     for(let i in t){
        str2[t[i]]=(str2[t[i]]||0)+1
    }
    console.log(str2)
    for(let i in s){
        if(str2[s[i]]!==str1[s[i]]){
          return false;
        }
    }
    return true;
};
console.log(isAnagram('cat','rat'))
// alternative approach with minimum time complexity
/*var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }

    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const charCodeS = s.charCodeAt(i) - 97;
        const charCodeT = t.charCodeAt(i) - 97;

        freq[charCodeS]++;
        freq[charCodeT]--;
    }

    return freq.every((value) => value === 0);

}
console.log(isAnagram('cat','rat'))*/