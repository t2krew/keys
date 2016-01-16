'use strict';

/*
 * get the object keys
 * @param obj {Object} 
 * 
 */

exports = module.exports = function(obj){
	if(!obj){
		throw Error('miss the argument');
	}
	if(Object.keys){
		return Object.keys(obj)
	}else{
		let a = [];
		for(a[a.length] in obj);
		return a;
	}
}