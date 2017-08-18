const levenshtein = (str1, str2) => {
	if (str1.length < str2.length) {
		return levenshtein(str2, str1);
	}
	
	if(str2.length == 0) {
		return str1.length;
	}
	
	let range = n => Array.from(Array(n).keys())
	
	let previous = range(str2.length + 1);
	
	for(let [i, k] of Array.from(str1).entries()) {
		let current = [i + 1];
		
		for(let [j, l] of Array.from(str2).entries()) {
			let insertions = previous[j + 1] + 1;
			let deletions = current[j] + 1;
			let substitutions = previous[j] + (k != l)
			current.push(Math.min(insertions, deletions, substitutions));
		}
		previous = current;
	}
	
	return previous.pop();
}
