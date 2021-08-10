const path = require('path');
const express = require('express');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, ''));

app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'quizw4d2',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next) {
  res.locals = { title: "Product" };
  if (!req.session.list) {
    req.session.list = [];
  }
  next();
});

app.get('/', (req, res) => {
  res.render("list", {list: req.session.list});
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'form.html'));
});

app.post('/add', (req, res) => {
    //lists.push(req.body.item);
    req.session.list.push(req.body.item);
    res.redirect(302, "/");
});

app.listen(3000);