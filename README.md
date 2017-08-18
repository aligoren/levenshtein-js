# levenshtein-js
Find the similar keywords with Levenshtein algorithm

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
