module.exports = function check(str, bracketsConfig) {
  // your solution
  let configLength = bracketsConfig.length;
  let brackets = {};
	for (let i = 0; i < configLength; i++){
		(function(i){
			return brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
		})(i);
	};
	return checkStr(str, brackets);
}

function checkStr(str, brackets){

	const strLength = str.length;
	let cache = [],
		char = '',
		closed = '';
	for (let j = 0; j < strLength; j++){
		char = str[j];
		closed = brackets[char];
		if (char != closed){
			if (closed){
				cache.push(char);
			} else if (cache.length == 0){
				return false;
			}else if (cache.length > 0) {
				let last = cache.pop();
				if (brackets[last] !== char){
					return false;
				}
			}
		} else {
			if (cache.length > 0) {
				let last = cache.pop();
				if (brackets[last] !== char){
					cache.push(last);
					cache.push(char);
				}
			}else if (cache.length == 0){
				cache.push(char);
			}
		}
	}
	return (cache.length == 0) ? true : false; 
}
