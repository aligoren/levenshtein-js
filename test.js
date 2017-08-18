const max_dest = 1;

const names = ['ali', 'ahmet', 'mehmet', 'can']

for(let name of names) {
	var dest = levenshtein('tehmet', name);
	if(dest <= max_dest) {
		console.log(name);
	}
}
