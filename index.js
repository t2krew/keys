'use strict';

/**
 * 获取对象中的key
 * @param  {Object} obj 源对象
 * @return {Array} keys 源对象中的key集合
 */
exports = module.exports = function(obj){
  if(!obj){
    throw Error('缺少参数obj!');
  }
  //判断是否支持原生Object.keys方法
  //可用则使用原生方法获取keys
  if(Object.keys){
    return Object.keys(obj)
  }else{
    //如果不支持Object.keys方法
    //则使用polyfill
    let keys = [];
    for(keys[keys.length] in obj);
    return keys;
  }
}