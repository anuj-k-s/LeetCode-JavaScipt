var isValid = function (s) {
  let map = new Map();
  map.set(")", "(");
  map.set("}", "{");
  map.set("]", "[");

  let finalVal = s.split("").reduce(function (accumulator, currentValue) {
    if (map.get(currentValue) && map.get(currentValue) === accumulator[accumulator.length - 1]) {
      return accumulator.slice(0, -1);
    } else {
      return accumulator + currentValue;
    }
  });
  if (finalVal.length > 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid("{[]}"));
