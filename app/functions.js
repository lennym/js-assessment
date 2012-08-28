if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'underscore' ], function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (s) {
            return str + ', ' + s;
        }
    },

    makeClosures : function(arr, fn) {
        var ret = [];
        _.each(arr, function (v) {
            ret.push(function () {
                return fn(v);
            });
        });
        return ret;
    },

    partial : function(fn, str1, str2) {
        return function (punc) {
            return fn(str1, str2, punc);
        }
    },

    useArguments : function() {
        var sum = 0;
        _.each(arguments, function (i) {
            sum += i;
        });
        return sum;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return fn.apply(this, args);
    },

    curryIt : function(fn) {
        var args1 = Array.prototype.slice.call(arguments, 1);
        return function () {
            var args2 = Array.prototype.slice.call(arguments, 0);
            return fn.apply(this, args1.concat(args2));
        }
    }
  };
});
