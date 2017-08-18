# levenshtein-js
Find the similar keywords with Levenshtein algorithm

# Live Example:

- [Codepen](https://codepen.io/aligoren/pen/prabmx?editors=0011)
- [Plunker](https://plnkr.co/edit/nJHAqDhV4z7gchESsedF?p=info)

# Usage

```javascript
const max_dest = 1;

const names = ['ali', 'ahmet', 'mehmet', 'can']

for(let name of names) {
	var dest = levenshtein('tehmet', name);
	if(dest <= max_dest) {
		console.log(name);
	}
}
```

# Inspired

- [Rhymer - Ömer Çıtak](https://github.com/Om3rCitak/rhymer)
- [Oraya - Ebru GÜLEÇ](https://github.com/ebrugulec/Oraya)
