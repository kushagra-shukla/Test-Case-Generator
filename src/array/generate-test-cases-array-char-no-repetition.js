const generateTestCasesCharNoDuplicate = require('../primitive/generate-test-cases-char-no-duplicate');

/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PRIMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// safe charSet abcdABCD@&!^&*()_-+='":;,.>$|{}[]`~

// repition of char is not allowed in a string
// aab aba are not duplicates but have repition of 'a'

// duplicate = true reptition = false is condition for calling this function
function generateNCasesOfArrayCharNoRepetition(size,number,charSet){

	let tests = "";
	let res = "";

	for(let i=0;i<number;++i){
		res = generateTestCasesCharNoDuplicate(size,charSet).replace(/\n/g," ");
		tests = tests.concat(res,"\n");
	}

		return tests;
}


module.exports = function(size,number,charSet){

	// TODO: isPossibleInRange(); will require some factorial calculations

	return generateNCasesOfArrayCharNoRepetition(size,number,charSet);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/