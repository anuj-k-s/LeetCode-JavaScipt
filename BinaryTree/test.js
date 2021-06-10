function solution(S){
let minStr = "z";
for (let i = 0; i < S.length; i++) {
    let str = S.slice(0,i).concat(S.slice(i+1,S.length));
   if(str.localeCompare(minStr) == -1){
       minStr = str
   };

    
}
console.log(minStr)
}
solution("hot");