export function isPromise(value) {
  	if (value !== null && typeof value === 'object') {
    	return value.promise && typeof value.promise.then === 'function';
  	}
}

export function getCookie(name) {
	  var value = '; ' + document.cookie;
	  var parts = value.split('; ' + name + '=');
	  if (parts.length == 2) return parts.pop().split(';').shift();
}

/**
 * 返回一个actionCreator
 * @param  {String}    type     action的type
 * @param  {Array} argNames 对应的字段 一般为payload
 * @return {Function}             返回一个创建action的函数
 */
export function makeActionCreator(type, ...argNames) {
  	return function(...args) {
		let action = { type };

		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index];
		})
		return action;
  	}
}