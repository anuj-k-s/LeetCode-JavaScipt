/**
 * @param {Array} stones
 */

var stoneGameVII = function(stones) {
    let totalSum = stones.reduce((sum,val)=> {
        return sum+val;
    },0)
    let counter = 0;
    let aliceSum = 0;
    let bobsSum = 0;
    let stoneToPick = 0;
    while(stones.length>0){
        if(counter%2 == 0){
            //alice
            if(stones[0] > stones[stones.length-1]){
                stoneToPick = stones.shift();
                aliceSum+= totalSum - stoneToPick;
            }else{
                stoneToPick = stones.pop();
                aliceSum+= totalSum - stoneToPick;
            }
            

        }else{
            if(stones[0] < stones[stones.length-1]){
                stoneToPick = stones.shift();
                bobsSum+= totalSum - stoneToPick;
            }else{
                stoneToPick = stones.pop();
                bobsSum+= totalSum - stoneToPick;
            }
        }
        totalSum -= stoneToPick
        counter++;
        
    }
    return aliceSum - bobsSum;
};

let stones = [7,90,5,1,100,10,10,2]

console.log(stoneGameVII(stones));