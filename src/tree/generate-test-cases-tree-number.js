const generateTestCasesNumber = require('../premitive/generate-test-cases-number');
/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PREMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// Range: [min, max)

function generateNCasesOfArrayNumber(size,dataType,number,min,max){

	let tests = "";
	let res = "";
	for(let i=0; i<number; ++i){		
		res = generateTestCasesNumber(dataType,size,min,max).replace(/\n/g," ");
		tests = tests.concat(res,"\n");
	}

	return tests;
}

module.exports = function(size,dataType,number,min,max){
	return generateNCasesOfArrayNumber(size,dataType,number,min,max);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/