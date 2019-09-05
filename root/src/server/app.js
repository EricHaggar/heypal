const express = require("express");
const app = express();
const indexRouter = require('./routes/index');
var bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
process.env.GOOGLE_APPLICATION_CREDENTIALS="C:\Users\Eric Haggar\Dev\HeyPal\scripts\config.json";
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
