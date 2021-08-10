const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.'));

app.use('', express.static(path.join(__dirname, '.', '')));

app.get('/', (req, res) => {
	res.render('bootloader');
});

app.listen(3000);