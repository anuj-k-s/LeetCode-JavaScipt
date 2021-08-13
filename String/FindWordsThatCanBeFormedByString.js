var countCharacters = function (words, chars) {
  let charObj = {}
  chars.split("").foreach(char=>{
    charObj[char] = (+charObj[char] || 0) + 1;
  })
  let count=0;
  
 for (let i = 0; i < words.length; i++) {
  let flag = true;
   let wordObj = {};
   words[i].split("").foreach(char=>{
    wordObj[char] = (+wordObj[char] || 0) + 1;
    if(wordObj[char]>charObj[char]){
      flag = false;
    }
  })
  count+= flag ? words[i].length : 0
   return count;
 }
};
var words = ["helloz","world","leetcode"];
var chars = "welldonehoneyr";
console.log(countCharacters(words, chars));
