const express = require('express');
const session = require('express-session')
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'assignmentw4d1q3_4',
  resave: false,
  saveUninitialized: true
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(function (req, res, next) {
  res.locals = { title: "Product" };
  if (!req.session.cart) {
    req.session.cart = [];
  }
  next();
});

let products = [{id: 1, name: 'prod1', price: 1000, description: 'desc1'},
				{id: 2, name: 'prod2', price: 2000, description: 'desc2'},
				{id: 3, name: 'prod3', price: 3000, description: 'desc3'}];

app.get('/', (req, res) => {
	res.render('product', {products: products});
});

app.post('/addToCart', (req, res) => {
	let newCartProds = [];
	if(req.body.prodId) {
		for(id of req.body.prodId) {
			for(product of products) {
				if(parseInt(id) === product.id) {
					product['quantity'] = 1;
					newCartProds.push(product)
				}
			}
		}
	}
	let cartProds = [];
	let oldCartProds = req.session.cart;
	if(oldCartProds.length !== 0) {
		for(let i=0; i<oldCartProds.length; i++) {
			for(let j=0; j<newCartProds.length; j++) {
				if(oldCartProds[i].id == newCartProds[j].id) {
					oldCartProds[i].quantity += newCartProds[j].quantity;
					oldCartProds[i].price += newCartProds[j].price;
					newCartProds.splice(j, 1);
				}
			}
		}
		cartProds = [...oldCartProds, ...newCartProds];
	} else {
		cartProds = newCartProds;
	}
	
	req.session.cart = cartProds;
	res.redirect('/shoppingCard');
});

app.get('/shoppingCard', (req, res) => {
	res.locals = { title: "Shopping Card" };
	res.render('shoppingcard', {contents: req.session.cart});
});

app.listen(3000);