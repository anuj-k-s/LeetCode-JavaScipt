var isAnagram = function(s, t) {
    let obj = {};
    let length = Math.max(s.length,t.length);
    for(let i=0;i<length;i++){
        obj[s[i]] = (+obj[s[i]] || 0) + 1;
        obj[t[i]] = (+obj[t[i]] || 0) - 1;
    }
    return !Object.values(obj).some(x => x>0 || x <0)
};

console.log(isAnagram("asv","sdsdab"));