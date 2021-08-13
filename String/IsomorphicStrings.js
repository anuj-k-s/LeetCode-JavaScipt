var isIsomorphic = function (s, t) {
  var objs= {};
  var objt= {};

  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (objs.hasOwnProperty(s[i]) ||  objt.hasOwnProperty(t[i])) {
      if(objs[s[i]] !== t[i] || objt[t[i]] !== s[i]){
        return false;
      }
    } else {
      objs[s[i]] = t[i];
      objt[t[i]] = s[i];
    }
  }
  return true;
};
console.log(isIsomorphic("paper", "title"));
