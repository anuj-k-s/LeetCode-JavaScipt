var countCharacters = function (words, chars) {
  words = words.map((word) => {
    let cpyChars = chars;
    let count = 0;
    word.split("").forEach((char, index) => {
      if (chars.includes(char)) {
        count++;
        word = word.replace(char, "");
        cpyChars = cpyChars.replace(char, "");
      }
    });
    return word.length == 0 ? count :0;
  });
  let total = words.reduce(function(accum,curr){
      return accum + curr
  },0)
  return total;
};
var words = ["hello","world","leetcode"];
var chars = "welldonehoneyr";
console.log(countCharacters(words, chars));
