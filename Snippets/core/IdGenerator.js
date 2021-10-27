function makeId(){
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (let i = 0; i < 20; i++) {
       let x = Math.random();
       let y = Math.random() * charactersLength;
       let z = Math.floor(y);
       let ab = characters.charAt(z);
       result+= ab;
    }
    return result;
}
function getRandomArbitrarybetweenTwoNumbers(min, max) {
    return Math.random() * (max - min) + min;
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      console.log(v);
      console.log(v.toString(16));
      return v.toString(16);
    });
  }
  
  console.log(uuidv4());


console.log(getRandomArbitrarybetweenTwoNumbers(10,20));

console.log(parseInt(makeId(),2));