const generateTestCasesChar = require('../primitive/generate-test-cases-char');

/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PRIMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// safe charSet abcdABCD@&!^&*()_-+='":;,.>$|{}[]`~

function generateNCasesOfArrayCharNoDuplicate(size,number,charSet){

	let tests = "";
	let res = "";
	// tests = "abc\nacb\n" number = 2 size = 3 tests.lenght = 8 = number*(size+1) = 2*(3+1) = 8
	while(tests.length != number*(size+1)){
		res = generateTestCasesChar(size,charSet).replace(/\n/g,"");
		if(tests.indexOf(res) == -1){
			tests = tests.concat(res,"\n");
		}
	}

		return tests;
}


module.exports = function(size,number,charSet){

	// TODO: isPossibleInRange(); will require some factorial calculations

	return generateNCasesOfArrayCharNoDuplicate(size,number,charSet);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/