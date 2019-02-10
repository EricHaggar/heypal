const express = require("express");
const fallback = require("express-history-api-fallback");
const bodyParser = require("body-parser");
const spawn = require("child_process").spawn;
const path = require("path");
const fs = require("fs");
const app = express();

const root = `${__dirname}/build`;
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
  let filePath = path.join(__dirname, "..", "scripts");
  await fs.writeFile(filePath + "/username.txt", username, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

  const pythonProcess = spawn("python", ["path/to/script.py"]);
  pythonProcess.stdout.on("data", data => {
    // Do something with the data returned from python script
    console.log(data);
  });
});

app.listen(3000, "127.0.0.1", () => {
  console.log("listening on PORT 3000!");
});
