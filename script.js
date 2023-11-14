function stringChop(str, size) {
  // your code here
	let arr = [];
	let i = 0;
	while (i <= str.length-1) {
		arr.push(str.slice(i, i+size));
		i = i + size;
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
