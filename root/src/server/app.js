const express = require("express");
const app = express();
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
