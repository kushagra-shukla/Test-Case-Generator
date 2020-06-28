const generateTestCasesNumber = require('./generate-test-cases-number');

function generateNCasesOfNumberNoDuplicate(dataType,number,min,max){

	let tests = "";
	let count = 0;
	while(count != number){

		let res = generateTestCasesNumber(dataType,1,min,max).replace(/\n/g,"");
		if(tests.indexOf(res) == -1){
			tests = tests.concat(res,"\n");
			++count;
		}
	}

	return tests;
}

// range is [min,max) i.e max is not included
function isPossibleInRange(dataType,number,min,max){

	if(dataType === 'int'){
		min = parseInt(min);
		max = parseInt(max);
		// remember range is [min, max) so max - min +1 not required
		console.log(`diff:  ${max-min}`);
		if( (max-min) >= number)
			return true;
		
		return false; 
	}
	else if(dataType === 'float'){
		min = min*Math.pow(10,7);
		max = max*Math.pow(10,7);

		// number of distinct numbers in the range [0.0000000,1.0000000]	
		//let multiplier = 1e7

		console.log(`diff: ${parseInt(String((max-min)))} raw diff: ${max-min}`);

		if( parseInt(String((max-min))) >= number){
			return true;
		} 

		
		return false;
	}

// 1e-15 behaves strangle only works till 1e-14
	else if(dataType === 'double'){
		min = min*Math.pow(10,15);
		max = max*Math.pow(10,15);

		//console.log(`Range: [${min}, ${max})`);
		// number of distinct numbers in the range [0.0000000,1.0000000]	
		//let multiplier = 1e+15;
		//console.log(`diff: ${parseInt(String((max-min)))} raw diff: ${max-min}`);

		if( parseInt(String((max-min))) >= number){
			return true;
		} 
		
		return false;
	}
	
	// for the case where the data type entered is wrong and will be handled in the next called function generateNCasesOfNumberNoDuplicate()
	console.log("Wrong Data type");
	return true;
}


module.exports = function(dataType,number,min,max){

	if(isPossibleInRange(dataType,number,min,max) == false){
		return `The range of min and max provided is too small to provide ${number} unique test cases.`;
	}
	
	return generateNCasesOfNumberNoDuplicate(dataType,number,min,max);
	

}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/