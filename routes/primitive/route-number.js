const generateTestCasesNumber = require('../../src/primitive/generate-test-cases-number');
const generateTestCasesNumberNoDuplicate = require('../../src/primitive/generate-test-cases-number-no-duplicate');

module.exports = function(req){

	// suitable for Primitives like int, float, double
	// if duplicate flag is not provided in parameter then this will be eequivalent to duplicate_flag = true

	/*

	if ('key' in myObj) or if (!('key' in myObj)) for inverse
	The in operator matches all object keys, including those in the object's prototype chain.

	Use myObj.hasOwnProperty('key') to check an object's own keys and will only return true if key is available on myObj directly

	*/

	let out;

	if(!(req.query.hasOwnProperty('duplicate_flag'))){
		const dataType = req.query.dataType;
		const number = parseInt(req.query.number);
		const min = parseFloat(req.query.min);
		const max = parseFloat(req.query.max);
		console.log(`Data Structure: PRIMITIVE, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
		//res.send("Hello TestCaseGenerator");
		out = generateTestCasesNumber(dataType,number,min,max);
		console.log(out);
	}
		
	else if(req.query.hasOwnProperty('duplicate_flag')){
		const dataType = req.query.dataType;
		const number = parseInt(req.query.number);
		const min = parseFloat(req.query.min);
		const max = parseFloat(req.query.max);
		const duplicate_flag = req.query.duplicate_flag.toLowerCase() == 'true'? true : false;
		
		console.log(`Data Structure: PRIMITIVE, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}, Duplicate: ${duplicate_flag}`);
		//res.send("Hello TestCaseGenerator");
		let result = null;
		// one line scope of if without quotes seems to be not the case in javascript
		// use curly braces even if one line of if statement
		if(duplicate_flag == true){
			result = generateTestCasesNumber(dataType,number,min,max);
		}
		else{
			//console.log(min);
			//console.log(parseFloat(req.params.max)); parseFloat() gives wrong output at e-14 100.00000000000009 correct output 100000000000000080

			result = generateTestCasesNumberNoDuplicate(dataType,number,min,max);
		}

		out = result;
		console.log(out);		
	}

	return out;

};
