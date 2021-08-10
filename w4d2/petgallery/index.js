const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.'));

app.use('', express.static(path.join(__dirname, '.', '')));

app.get('/', (req, res) => {
	res.render('ajaxpets');
});

app.get('/getPics', (req, res) => {
	let images;
	if(req.query.animal === 'kitty') {
		images = `<img src="images/kitty1.jpeg" />`;
		images += `<img src="images/kitty5.jpeg" />`;
	} else {
		images = `<img src="images/puppy2.jpeg" />`;
		images += `<img src="images/puppy3.jpeg" />`;
	}
	res.send(images);
});

app.listen(3000);