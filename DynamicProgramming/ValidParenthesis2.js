var isValid = function (s) {
    let obj = {
    "(":")",
    "{":"}",
    "[":"]"
    };
  const stack = [];
  
   for(const prntsis of s){
       if(obj.hasOwnProperty(prntsis)){
            stack.push(prntsis);
       }else{
           //this is  a closing parenthesis
           const lastParenthesis = stack.pop(); // 
           if(prntsis !== obj[lastParenthesis]){
               return false;
           }
       }
   }
   return stack.length === 0;
  };
  
  console.log(isValid("{[]}"));
  