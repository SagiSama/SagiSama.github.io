const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "."));

app.use(express.json());
app.use('', express.static(path.join(__dirname, '', '')));

const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/ask", (req, res) => {
    console.log(req.body);
    let randomNum = Math.floor(Math.random() * answers.length)
    console.log(answers[randomNum]);
    res.send(answers[randomNum]);
});

app.get("/list", (req, res) => {
    res.render("list", { list: list });
});

app.listen(3000);