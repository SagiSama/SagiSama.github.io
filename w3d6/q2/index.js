const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(function (req, res, next) {
  res.locals = { title: "Q2" };
  next();
});

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/result', (req, res) => {
	let {name, age} = req.body;
	if(!name) { name = 'person';}
	if(!age) { age = 0;}
	
	res.render('result', {name: name, age: age});
});

app.listen(3000);