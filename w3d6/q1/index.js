const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
	const date = new Date();
	if(date.getHours() > 6 && 18 > date.getHours()) {
		app.use('/css', express.static(path.join(__dirname, 'css/day.css')));
	} else {
		app.use('/css', express.static(path.join(__dirname, 'css/night.css')));
	}
	
	res.render('index', {
		time: date.toTimeString(),
	});
});

app.listen(3000);