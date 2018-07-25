;(function(undefined) {
	/*  在定义插件之前添加一个分号，可以解决js合并时可能会产生的错误问题；
	 	undefined在老一辈的浏览器是不被支持的，直接使用会报错，js框架要考虑到兼容性，
	 	因此增加一个形参undefined，就算有人把外面的 undefined 定义了，里面的 undefined 依然不受影响；
	 	把window对象作为参数传入，是避免了函数执行的时候到外部去查找。
	 	*/
	 	var _global;
	 	var plugin = {
	 		add: function(n1, n2){
	 			return n1+n2;
	 		},	
	 		sub: function(n1, n2){
	 			return n1-n2;
	 		},
	 		mul: function(n1, n2){
	 			return n1*n2;
	 		},
	 		div: function(n1, n2){
	 			return n1/n2;
	 		},
	 		sur: function(n1, n2){
	 			return n1%n2;
	 		},
	 	};
	 	
	 	_global = (function(){ return this || (0, eval)('this'); }());

	 	if (typeof module !== "undefined" && module.exports) {
	 		module.exports = plugin;
	 	} else if (typeof define === "function" && define.amd) {
	 		define(function(){return plugin;});
	 	} else {
	 		!('plugin' in _global) && (_global.plugin = plugin);
	 	}
	 }());