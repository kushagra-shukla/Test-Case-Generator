const generateTestCasesNumber = require('../primitive/generate-test-cases-number');
/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PRIMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// Range: [min, max)

function generateNCasesOfArrayNumberNoDuplicate(size,dataType,number,min,max){

	let tests = "";
	let res = "";
	let count = 0;
	while(count != number){		
		res = generateTestCasesNumber(dataType,size,min,max).replace(/\n/g," ");
		if(tests.indexOf(res) == -1){
			tests = tests.concat(res,"\n");
			++count;
		}
	}

	return tests;
}

module.exports = function(size,dataType,number,min,max){

	// TODO: isPossibleInRange(); will require some factorial calculations

	return generateNCasesOfArrayNumberNoDuplicate(size,dataType,number,min,max);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/