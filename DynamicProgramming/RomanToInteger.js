

var romanToInt = function (s) {
  let sum = 0;
  let romanToIntObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (romanToIntObj[s[i]] < romanToIntObj[s[i + 1]]) {
      sum -= romanToIntObj[s[i]];
    } else {
      sum += romanToIntObj[s[i]];
    }
  }
  console.log(sum);
};


romanToInt("III");