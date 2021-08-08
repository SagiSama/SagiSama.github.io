const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(function (req, res, next) {
  res.locals = { title: "Product" };
  next();
});

let products = [{id: 1, name: 'prod1', price: 1000, description: 'desc1', quantity: 1},
				{id: 2, name: 'prod2', price: 2000, description: 'desc2', quantity: 2},
				{id: 3, name: 'prod3', price: 3000, description: 'desc3', quantity: 3}];

app.get('/', (req, res) => {
	res.render('product', {products: products});
});

app.post('/addToCart', (req, res) => {
	console.log("%j added products to card!", req.body)
	res.redirect('/');
});

app.get('/shoppingCard', (req, res) => {
	res.locals = { title: "Shopping Card" };
	res.render('shoppingcard', {contents: products});
});

app.listen(3000);