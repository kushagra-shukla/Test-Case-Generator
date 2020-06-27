
//const generateTestCasesNumber = require('./premitive/route-number');
//const generateTestCasesChar = require('./premitive/route-char');
const generateTestCasesPremitive = require('./premitive/route-premitive');
const generateTestCasesArray = require('./array/route-array');
const generateTestCasesTree = require('./tree/route-tree');

module.exports = function(app){

	//TODO: input validation 

	app.get('/', (req,res)=>{
		res.send("Hello to the Test Case Generator API");
	});

	app.get('/api', (req,res)=>{
		// just in case somebody inputs Array or ArRaY 
		const dataStr = req.query.dataStr.toUpperCase();
		let out;
		
		switch(dataStr){
			case 'PREMITIVE':
				out = generateTestCasesPremitive(req);
				res.status(200);
				break;
			case 'ARRAY':
				out = generateTestCasesArray(req);
				res.status(200);
				break;
			case 'TREE':
				out = generateTestCasesTree(req);
				res.status(200);
				break;
			default:
				out = "This data structure in not supported.";
				// 422 uprocessible entity 400 is bad request => incorrect syntax which is not the case here
				res.status(422).json({
					output: out,
					error: 'Unprocessible Entity'
				});
				break;
		}

		// setting content-length header removes the default TrnasferEncoding: chunked
		// using gzip content-encoding via connect.compress will remove the content-length header
		// content-type header is added by express in both res.send() and res.json()=> calls res.send() ultimately
		// res.json() provides formatting option which are then passed to json.stringify(object, replacer, space)
		// replaces and space are the two options.
		// app.set('json replacer', replacer); => property transformation rules
		// app.set('json spaces', 2);  => number of spaces for indentation


		if(res.statusCode === 200){
			res.json({
				output: out
			});
		}

	});

	// order of calling matters 
	// generateTestCasesChar(app);
	// generateTestCasesNumber(app);
	// generateTestCasesArray(app);
	// generateTestCasesTree(app);

	// Middleware functions are executed sequentially

	
/*	Okay so request never responds in here 
	app.get('/api/*', (req,res)=>{
		let dataStr = req.params[0].slice(0,req.params[0].indexOf('/'));
		console.log(dataStr);
		switch(dataStr){
			case "PREMITIVE":
				generateTestCasesNumber(app);
				generateTestCasesChar(app);
				break;
			default:
				res.send(`${dataStr} is not Supported`);
				break;
		}
	});
*/
	
};

