if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery', 'underscore' ], function($) {
  var Promise = function () {}
  Promise.prototype = {
  	then: function (f) {
  		var _complete = this.complete;
		this.complete = function () {
			_complete.apply(this, arguments);
			f.apply(this, arguments);
		};
	},
	complete: function () {}
  }
  return {
    async : function(value) {
    	var promise = new Promise();
    	setTimeout(function () {
    		promise.complete(value);
    	}, 1);
    	return promise;
    },

    manipulateRemoteData : function(url) {
    	var promise = new Promise();
    	$.get(url, function (result) {
    		var names = _.pluck(result.people, 'name');
    		promise.complete(names.sort());
    	});
    	return promise;
    }
  };
});
