const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('assignmentw4d1'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	let tags = '';
	for (const cookie in req.cookies) {
		if(Object.prototype.toString.call(req.cookies[cookie]) !== '[object Object]') {
		  	tags += `<tr>
			  			<td>${cookie}</td>
			  			<td>${req.cookies[cookie]}</td>
				  	</tr>`
		} else {
		  	tags += `<tr><td colspan="2">${cookie}</td></tr>
		  			<tr>
			  			<td>${req.cookies[cookie].key}</td>
			  			<td>${req.cookies[cookie].value}</td>
				  	</tr>`
		}
	}
	
	res.send(`<form method=post action=addCookie>
				<label>Key</label>
				<input type="text" name="key">
				<label>Value</label>
				<input type="text" name="value">
				<input type="submit" value="Add Cookie">
			  </form>
			  <hr />
			  <table>
			  	<caption>Cookie list</caption>
			  	<tr>
			  		<th>Key</th>
			  		<th>Value</th>
			  	</tr>
			  	${tags}
			  <table><hr />`);
});

app.post('/addCookie', (req, res) => {
	res.cookie('pair', req.body);
	res.redirect(303, '/');
});

app.listen(3000);
