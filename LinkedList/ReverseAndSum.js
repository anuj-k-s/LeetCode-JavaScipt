let a = 123;
let myFunc = x => Number(x);
let arr = Array.from(String(a),myFunc);
console.log(arr);
let returnedListNode;
for(let i=0;i<arr.length;i++){
    if(i==0){
        returnedListNode = new ListNode(arr[i],undefined);
    }else{
        let temp =  new ListNode(arr[j],undefined);
        returnedListNode.next = temp;
    }
}
