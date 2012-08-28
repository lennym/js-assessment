if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        if (typeof arr.indexOf == 'function') {
            return arr.indexOf(item);
        }
        for (var i=0,j=arr.length;i<j;i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var s = 0;
        for (var i=0,j=arr.length;i<j;i++) {
            s += arr[i];
        }
        return s;
    },

    remove : function(arr, item) {
        var s = [];
        for (var i=0,j=arr.length;i<j;i++) {
            if (arr[i] !== item) {
                s.push(arr[i]);
            }
        }
        return s;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var s = 0;
        for (var i=0,j=arr.length;i<j;i++) {
            if (arr[i] === item) {
                s++;
            }
        }
        return s;
    },

    duplicates : function(arr) {
        var i, j, counts = {}, ret = [];
        for (i=0,j=arr.length;i<j;i++) {
            counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
        }
        for (i in counts) {
            if (counts[i] > 1) {
                ret.push(i);
            }
        }
        return ret;
    },

    square : function(arr) {
        var i, j, ret = [];
        for (i=0,j=arr.length;i<j;i++) {
            ret.push(arr[i] * arr[i]);
        }
        return ret;
    },

    findAllOccurrences : function(arr, target) {
        var ret = [], i = this.indexOf(arr, target);
        while (i !== -1) {
            arr[i] = !target;
            ret.push(i);
            i = this.indexOf(arr, target);
        }
        return ret;
    }
  };
});
