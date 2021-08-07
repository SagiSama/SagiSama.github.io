const express = require('express');

const app = express();

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
	let {name, age} = req.body;
	console.log(name+"...name");
	res.redirect(303, `output/?name=${name}&age=${age}`);
});

app.get('/output', (req, res) => {
	let {name, age} = req.query;
 	if (!name) {
 		name = "person";
 	}
 	if (!age) {
 		age = 0;
 	}
 	res.send(`Welcome ${name}, age ${age}`);
});

app.listen(3000);