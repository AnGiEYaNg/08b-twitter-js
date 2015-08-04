var express = require('express');
var app = express();

app.use(function(){})

app.get('/', function(req, res){
	res.send('hi')

})

app.listen(3000);