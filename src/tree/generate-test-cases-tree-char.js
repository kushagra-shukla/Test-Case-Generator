const generateTestCasesChar = require('../primitive/generate-test-cases-char');

/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PRIMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// safe charSet abcdABCD@&!^&*()_-+='":;,.>|{}[]`~\

function generateNCasesOfArrayChar(size,number,charSet){

	let tests = "";
	let res = "";
	for(let i=0;i<number;++i){
		res = generateTestCasesChar(size,charSet).replace(/\n/g,"");
		tests = tests.concat(res,"\n");
	}

		return tests;
}


module.exports = function(size,number,charSet){
	return generateNCasesOfArrayChar(size,number,charSet);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/