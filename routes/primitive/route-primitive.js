const generateTestCasesNumber = require('./route-number');
const generateTestCasesChar = require('./route-char');


function generateTestCasesPrimitive(req){

	const dataType = req.query.dataType.toLowerCase();

	if(dataType === 'char'){
		return generateTestCasesChar(req);
	}

	return generateTestCasesNumber(req);
}

module.exports = function(req){

	return generateTestCasesPrimitive(req);

};
