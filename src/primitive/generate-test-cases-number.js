
/* Everything coming in via Route Paramter is of String type */
//let listDataStr = ["PRIMITIVE", "ARRAY", "TREE", "GRAPH"];
//let dataType = ["int", "float", "double", "char"];

// Range: [min, max)
function generateInRangeInteger(min,max){
	return parseInt(String((Math.random()*(max-min) + min)));
}

function generateInRangeFloat(min,max){
	return (Math.random() * (max - min) + min).toFixed(7);
}

function generateInRangeDouble(min,max){
	return (Math.random() * (max - min) + min).toFixed(15);
}


function generateNCasesOfNumber(dataType,number,min,max){

	let tests = "";
	
	switch(dataType){

		case "int":
			for(let i = 0; i<number; i++){
				tests = tests.concat(generateInRangeInteger(min,max),"\n");
			}
			break;
		
		case "float":
			for(let i = 0; i<number; i++){
				tests = tests.concat(generateInRangeFloat(min,max),"\n");
			}
			break;

		case "double":
			for(let i = 0; i<number; i++){
				tests = tests.concat(generateInRangeDouble(min,max),"\n");
			}
			break;

		default:
			tests = dataType+" is not supported\n";
			break;
	}

	return tests;
}

module.exports = function(dataType,number,min,max){
	return generateNCasesOfNumber(dataType,number,min,max);
}

/*
java script does not have function overloading only function overriding (last occurrence is always used)
module.exports = function(dataStr,dataType,number,charSet){
	return generateTests(dataStr,dataType,number,);
}
*/