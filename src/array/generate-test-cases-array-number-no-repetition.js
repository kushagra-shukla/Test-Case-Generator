const generateTestCasesNumberNoDuplicate = require('../primitive/generate-test-cases-number-no-duplicate');
/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PRIMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// Range: [min, max)

function generateNCasesOfArrayNumberNoRepetition(size,dataType,number,min,max){

	let tests = "";
	let res = "";
	for(let i=0; i<number; ++i){		
		res = generateTestCasesNumberNoDuplicate(dataType,size,min,max).replace(/\n/g," ");
		tests = tests.concat(res,"\n");
	}

	return tests;
}

module.exports = function(size,dataType,number,min,max){
	// TODO: isPossibleInRange(); will require some factorial calculations
	return generateNCasesOfArrayNumberNoRepetition(size,dataType,number,min,max);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/