const generateTestCasesChar = require('../../src/premitive/generate-test-cases-char');
const generateTestCasesCharNoDuplicate = require('../../src/premitive/generate-test-cases-char-no-duplicate')
// safe charSet = abcdABCD@&!^&*()_-+='":;,.>$|{}[]`~
// unsafe charSet = %&/\? solution ? use urlencoding values

module.exports = function(req){

	let out;

	// suitable for Premitive char
	if(!(req.query.hasOwnProperty('duplicate_flag'))){
		const number = parseInt(req.query.number);
		const charSet = req.query.charSet;
		console.log(`Data Structure: PREMITIVE, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}`);
		out = generateTestCasesChar(number,charSet);		
		console.log(out);
		
	}

	else if(req.query.hasOwnProperty('duplicate_flag')){
		const number = parseInt(req.query.number);
		const charSet = req.query.charSet;
		const duplicate_flag = req.query.duplicate_flag.toLowerCase() == 'true'? true : false;
		console.log(`Data Structure: PREMITIVE, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}, Duplicate: ${duplicate_flag}`);

		let result = null;
		if(duplicate_flag == true){
			result = generateTestCasesChar(number,charSet);
		}
		else{
			result = generateTestCasesCharNoDuplicate(number,charSet);
		}

		out = result;
		console.log(out);
	}

	return out;

};