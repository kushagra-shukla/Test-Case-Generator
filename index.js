const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

require('./routes/services.js')(app);

app.listen(port, ()=> console.log(`We are live on ${port}`));
