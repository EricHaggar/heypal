const express = require("express");
const fallback = require("express-history-api-fallback");
const bodyParser = require("body-parser");
const spawn = require("child_process").spawn;
const path = require("path");
const fs = require("fs");
const app = express();
var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyA1hjpz3vLLfTGr0uOMft6dk4S-TEBMUM8",
  authDomain: "heypal-f08dc.firebaseapp.com",
  databaseURL: "https://heypal-f08dc.firebaseio.com",
  storageBucket: "heypal-f08dc.appspot.com"
};

firebase.initializeApp(config);

const {PythonShell} = require('python-shell');
 

let filePath = path.join(__dirname, "..", "front-end");
const root = `${filePath}/build`;
app.use(express.static(root));
app.use(fallback("index.html", { root }));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.post("/register", async function(req, res) {
  let username = req.body.query;
  let saveToFile = await fs.writeFile("username.txt", username, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
<<<<<<< HEAD:front-end/server.js
  var query = firebase
    .database()
    .ref()
    .child(username);
  res.setHeader("Content-Type", "application/json");
  query.on("value", snap => res.send(JSON.stringify(snap.val())));
=======
  PythonShell.run("master.py", null, function (err) {
    if (err) throw err;
    console.log('finished');
  });
>>>>>>> 25020dd33fa90919cb2ad3373da8c9bbb5bb9f77:scripts/server.js
});

app.listen(3000, "127.0.0.1", () => {
  console.log("listening on PORT 3000!");
});
