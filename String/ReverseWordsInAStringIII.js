var reverseWords = function(s) {
    y = s.split(" ").map( e => Array.from(e).reverse().join("")).join(" ");
    console.log(y);
};

reverseWords("Let's take LeetCode contest");