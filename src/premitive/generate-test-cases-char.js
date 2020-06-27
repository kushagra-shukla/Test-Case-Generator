
/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PREMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// safe charSet abcdABCD@&!^&*()_-+='":;,.>$|{}[]`~

function generateInCharSet(charSet){
	let len = charSet.length;
	return charSet[Math.floor(Math.random()*(len))];
}


function generateNCasesOfChar(number,charSet){

	let tests = "";
	for(let i=0; i<number; ++i){
		tests = tests.concat(generateInCharSet(charSet),"\n");
	}

	return tests;
}


module.exports = function(number,charSet){
	return generateNCasesOfChar(number,charSet);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/