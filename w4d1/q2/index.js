const express = require('express');
const session = require('express-session')

const app = express();

app.use(session({
  secret: 'assignmentw4d1',
  resave: false,
  saveUninitialized: true
}))

const path = require('path');
module.exports = path.dirname(process.mainModule.filename);
const rootDir = require('.');

app.use(express.urlencoded({ extended: false }));

const date = new Date();
const hour = date.getHours();

if(hour > 6 && 18 > hour) {
	app.use('/css', express.static(path.join(__dirname, 'css/day.css')));
} else {
	app.use('/css', express.static(path.join(__dirname, 'css/night.css')));
}

app.get('/', (req, res) => {
	res.sendFile(path.join(rootDir, '/', 'index.html'))
});

app.post('/result', (req, res) => {
    req.session.pair = req.body;
	res.redirect(303, `output`);
});

app.get('/output', (req, res) => {
	let {name, age} = (req.session.pair) ? req.session.pair : {name: null, age: null};
 	if (!name) {
 		name = "person";
 	}
 	if (!age) {
 		age = 0;
 	}
 	res.send(`Welcome ${name}, age ${age}`);
});

app.listen(3000);