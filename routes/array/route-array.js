const generateTestCasesArrayChar = require('../../src/array/generate-test-cases-array-char');
const generateTestCasesArrayCharNoDuplicate = require('../../src/array/generate-test-cases-array-char-no-duplicate');
const generateTestCasesArrayCharNoRepetition = require('../../src/array/generate-test-cases-array-char-no-repetition');
const generateTestCasesArrayCharNoDuplicateNoRepetition = require('../../src/array/generate-test-cases-array-char-no-duplicate-no-repetition');
const generateTestCasesArrayNumber = require('../../src/array/generate-test-cases-array-number');
const generateTestCasesArrayNumberNoDuplicate = require('../../src/array/generate-test-cases-array-number-no-duplicate');
const generateTestCasesArrayNumberNoRepetition = require('../../src/array/generate-test-cases-array-number-no-repetition');
const generateTestCasesArrayNumberNoDuplicateNoRepetition = require('../../src/array/generate-test-cases-array-number-no-duplicate-no-repetition');
const generateTestCases2DArrayNumber = require('../../src/array/generate-test-cases-2d-array-number');


// safe charSet = abcdABCD@&!^&*()_-+='":;,.>|{}[]`~\ 
// alternatively PUT request can be used to remove such nuances

module.exports = function(req){

	// TODO: add sorted array functionality

	let out;

	// suitable for Premitive char
	if(req.query.dataType.toLowerCase() === 'char'){
		if(!(req.query.hasOwnProperty('duplicate_flag'))){
			const size = parseInt(req.query.size);
			const number = parseInt(req.query.number);
			const charSet = req.query.charSet;
			console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}`);
			out = generateTestCasesArrayChar(size,number,charSet);		
			console.log(out);
		}

		// repetition is assumed to be true
		else if(req.query.hasOwnProperty('duplicate_flag') && !(req.query.hasOwnProperty('repetition_flag'))){
			const size = parseInt(req.query.size);
			const number = parseInt(req.query.number);
			const charSet = req.query.charSet;
			const duplicate_flag = req.query.duplicate_flag.toLowerCase() == 'true'? true : false;
			console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}, Duplicate: ${duplicate_flag}`);
			
			let result = null;
			if(duplicate_flag == true){
				result = generateTestCasesArrayChar(size,number,charSet);
			}
			else{
				result = generateTestCasesArrayCharNoDuplicate(size,number,charSet);
			}
			out = result;	
			console.log(out);
		}


		else if(req.query.hasOwnProperty('duplicate_flag') && req.query.hasOwnProperty('repetition_flag')){
			const size = parseInt(req.query.size);
			const number = parseInt(req.query.number);
			const charSet = req.query.charSet;
			const duplicate_flag = req.query.duplicate_flag.toLowerCase() == 'true'? true : false;
			const repetition_flag = req.query.repetition_flag.toLowerCase() == 'true'? true : false;
			console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}, Duplicate: ${duplicate_flag}, Repetition: ${repetition_flag}`);
			
			let result = null;
			if(duplicate_flag == true && repetition_flag == true){
				result = generateTestCasesArrayChar(size,number,charSet);
			}
			else if(duplicate_flag == true && repetition_flag == false){
				result = generateTestCasesArrayCharNoRepetition(size,number,charSet);
			}
			else if(duplicate_flag == false && repetition_flag == true){
				result = generateTestCasesArrayCharNoDuplicate(size,number,charSet);
			}
			else if(duplicate_flag == false && repetition_flag == false){
				result = generateTestCasesArrayCharNoDuplicateNoRepetition(size,number,charSet);
			}
			out = result;	
			console.log(out);
			
		}
	}

	// if invalid dataType is given then it will be handled by function in src files
	else{
	// suitable for Premitives like int, float, double
		if(!(req.query.hasOwnProperty('duplicate_flag'))){
			const size = parseInt(req.query.size);
			const dataType = req.query.dataType;
			const number = parseInt(req.query.number);
			const min = parseInt(req.query.min);
			const max = parseInt(req.query.max);
			console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
			//res.send("Hello TestCaseGenerator");
			out = generateTestCasesArrayNumber(size,dataType,number,min,max);
			console.log(out);
			
		}

		else if(req.query.hasOwnProperty('duplicate_flag') && !(req.query.hasOwnProperty('repetition_flag'))){
			const size = parseInt(req.query.size);
			const dataType = req.query.dataType;
			const number = parseInt(req.query.number);
			const min = parseInt(req.query.min);
			const max = parseInt(req.query.max);
			const duplicate_flag = req.query.duplicate_flag.toLowerCase() == 'true'? true : false;
			console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}, Duplicate: ${duplicate_flag}`);
			//res.send("Hello TestCaseGenerator");
			let result = null;
			if(duplicate_flag == true){
				result = generateTestCasesArrayNumber(size,dataType,number,min,max);
			}
			else{
				result = generateTestCasesArrayNumberNoDuplicate(size,dataType,number,min,max);
			}
			out = result;
			console.log(out);
			
		}

		else if(req.query.hasOwnProperty('duplicate_flag') && (req.query.hasOwnProperty('repetition_flag'))){
			const size = parseInt(req.query.size);
			const dataType = req.query.dataType;
			const number = parseInt(req.query.number);
			const min = parseInt(req.query.min);
			const max = parseInt(req.query.max);
			const duplicate_flag = req.query.duplicate_flag.toLowerCase() == 'true'? true : false;
			const repetition_flag = req.query.repetition_flag.toLowerCase() == 'true'? true : false;

			console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}, Duplicate: ${duplicate_flag}, Repetition: ${repetition_flag}`);
			//res.send("Hello TestCaseGenerator");
			let result = null;
			if(duplicate_flag == true && repetition_flag == true){
				result = generateTestCasesArrayNumber(size,dataType,number,min,max);
			}
			else if(duplicate_flag == true && repetition_flag == false){
				result = generateTestCasesArrayNumberNoRepetition(size,dataType,number,min,max);
			}
			else if(duplicate_flag == false && repetition_flag == true){
				result = generateTestCasesArrayNumberNoDuplicate(size,dataType,number,min,max);
			}
			else if(duplicate_flag == false && repetition_flag == false){
				result = generateTestCasesArrayNumberNoDuplicateNoRepetition(size,dataType,number,min,max);
			}
			out = result;	
			console.log(out);

		}

		// app.get('/api/2DARRAY/:row/:col/:dataType/:number/:min/:max', (req, res) => {
		// 	const row = parseInt(req.query.row);
		// 	const col = parseInt(req.query.col);
		// 	const dataType = req.query.dataType;
		// 	const number = parseInt(req.query.number);
		// 	const min = parseInt(req.query.min);
		// 	const max = parseInt(req.query.max);
		// 	console.log(`Data Structure: ARRAY, Row & Column of ARRAY: (${row},${col}) , Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
		// 	//res.send("Hello TestCaseGenerator");
		// 	const out = generateTestCases2DArrayNumber(row,col,dataType,number,min,max);
		// 	console.log(out);
		// 	res.send(`Here is the output:\n ${out}`);
		// });

	}

	return out;

};