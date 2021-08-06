const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send(`<form method="POST" action="/result">
				<label>Name</label>
				<input type="text" name="name">
				<label>Age</label>
				<input type="number" name="age">
				<input type="submit" value="Submit Query">
			  </form>`);
});

app.post('/result', (req, res) => {
	let name = req.param('name', null);
	let age = req.param('age', null);
	
	res.send(`Welcome ${name}, age ${age}`);
});

app.listen(3000);