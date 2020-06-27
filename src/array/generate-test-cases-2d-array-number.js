const generateTestCasesArrayNumber = require('./generate-test-cases-array-number');

function generateNCasesOf2DArrayNumber(row,col,dataType,number,min,max){

	let tests = "";
	let res = "";

	for(let i=0; i<number; i++){
		res = generateTestCasesArrayNumber(col,dataType,row,min,max);
		tests = tests.concat(res,"\n");
	}

	return tests;
}

module.exports  = function(row,col,dataType,number,min,max){

	return generateNCasesOf2DArrayNumber(row,col,dataType,number,min,max);

};