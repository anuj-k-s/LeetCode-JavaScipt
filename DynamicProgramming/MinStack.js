/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.slice(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};


  var obj = new MinStack()
  obj.push(-2);
  obj.push(0);
  obj.push(3)
  console.log(obj);

 //var param_3 = obj.top();
 //console.log(param_3);
//   console.log(param_3);
   var param_4 = obj.getMin()
   console.log(param_4);
