if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      if (typeof num !== 'number') {
        return false;
      } else if (num && !(num%15)) {
        return 'fizzbuzz';
      } else if (num && !(num%5)) {
        return 'buzz';
      } else if (num && !(num%3)) {
        return 'fizz';
      } else {
        return num;
      }
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided
    }
  };
});
