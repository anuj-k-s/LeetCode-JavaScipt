/*  async function add(param){
    param();
}

function a(){
    console.log("a");
}
add(a);

axios.get("url")
    .then(data => console.log(data))
    .error() */

/* var promise = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Resolved");
        },1000)

}).then(data => console.log(data))
.catch(error => console.log(error))
.finally(console.log("finally"));
 */
//[5, 6,8, 9, 10, 3, 4]

let arr = [ 5, 6,7, 8,5, 6,8, 9, 10, 3, 4];
let arr1=[];

function searchelement(arr){
for(let i=0;i<arr.length;i++){
    if(arr1[arr[i]] === -1){
        return false;
    }else{
        arr1[arr[i]] = -1
    }
}
return true;
}

console.log(searchelement(arr));