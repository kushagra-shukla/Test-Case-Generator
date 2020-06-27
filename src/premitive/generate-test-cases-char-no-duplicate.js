const generateTestCasesChar = require('./generate-test-cases-char');


function generateNCasesOfCharNoDuplicate(number,charSet){

	let tests = "";
	let count = 0;
	while(count != number){
		let res = generateTestCasesChar(1,charSet).replace(/\n/g,"");
		if(tests.indexOf(res) == -1){
			tests = tests.concat(res,"\n");
			++count;
		}
	}

	return tests;
}

function isPossibleInRange(number,charSet){

	let unique = "";
	let count = 0;

	while(count != charSet.length){
		let char = charSet[count];
		if(unique.indexOf(char) == -1){
			unique = unique.concat(char);
		}
		++count;
	}
	// if possible it will be better to use "unique" as the "charSet" but its scope is local so charSet = unique won't work 
	return (unique.length < number)? false : true;
}


module.exports = function(number,charSet){

	if(isPossibleInRange(number,charSet) == false){
		return `The character set provided is too small to provide ${number} unique test cases.`
	}

	return generateNCasesOfCharNoDuplicate(number,charSet);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/