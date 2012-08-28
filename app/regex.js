if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return !!str.match(/\d+/);
    },

    containsRepeatingLetter : function(str) {
        return !!str.match(/([A-Za-z])\1/); // DISCLOSURE: I copied this from the answers
    },

    endsWithVowel : function(str) {
        return !!str.match(/[aeiou]+$/i);
    },

    captureThreeNumbers : function(str) {
        var m = str.match(/\d{3}/);
        return !!m && m[0];
    },

    matchesPattern : function(str) {
        return !!str.match(/^\d{3}\-\d{3}\-\d{4}$/)
    },
    isUSD : function(str) {
        return !!str.match(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/);
    }
  };
});
