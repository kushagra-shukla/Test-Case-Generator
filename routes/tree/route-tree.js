const generateTestCasesTreeChar = require('../../src/tree/generate-test-cases-tree-char');
const generateTestCasesTreeNumber = require('../../src/tree/generate-test-cases-tree-number');

// safe charSet = abcdABCD@&!^&*()_-+='":;,.>|{}[]`~\ 
// alternatively PUT request can be used to remove such nuances

module.exports = function(req){

	let out;
	
	// suitable for Premitive char
	if(req.query.dataType.toLowerCase() === 'char'){
		const size = parseInt(req.params.size);
		const number = parseInt(req.params.number);
		const charSet = req.params.charSet;
		console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}`);
		out = generateTestCasesTreeChar(size,number,charSet);		
		console.log(out);		
	}

	// suitable for Premitives like int, float, double
	else{
		const size = parseInt(req.params.size);
		const dataType = req.params.dataType;
		const number = parseInt(req.params.number);
		const min = parseInt(req.params.min);
		const max = parseInt(req.params.max);
		console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
		//res.send("Hello TestCaseGenerator");
		out = generateTestCasesTreeNumber(size,dataType,number,min,max);
		console.log(out);

	}

	return out;

};
