function lengthofLastWord(s){
    let strArr = s.split(" ");
    let lastWord =0;
    for(let i=strArr.length-1;i>=0;i--){
        if(strArr[i].length >0){
            lastWord = strArr[i].length;
            break;
        }
    }
    return lastWord;
}
console.log(lengthofLastWord("   fly me   to   the moon  "));
const Arr = "   fly me   to   the moon  ".trim().split(" ");
console.log(Arr[Arr.length-1].length);