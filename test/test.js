'use strict';

let assert = require('assert');
let keys = require('../');

let obj = {
	name : 'krew',
	age : 25,
	sex : 'male',
	hobby : 'basketball'
}

describe('keys test',function(){
	it('should throw an Error',function(){
		assert.throws(function(){
			keys()
		},
		function(err){
			if(err.message == 'miss the argument'){
				return true;
			}
		})
	});

	it('should return a array of object keys',function(){
		assert.doesNotThrow(function(){
			keys(obj)
		},
		function(d){
			if((typeof d == 'array') && d.length == 4){
				return true;
			}
		})
	})
})