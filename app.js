function addTogether(x, y) {	

	for (i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number') {
			return undefined;
		}
	}

	if (arguments.length === 2) {
		return x + y;
	}
	else {
		return function(z) {
			if (typeof arguments[0] !== 'number') {
				return undefined;
			}
			return x + z;
		};
	}	

}

console.log(addTogether(2)(3));