var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('oh no an error well fuck u wont even see this');
})

app.use("/", require("./routes"));


app.listen(app.get("port"), function(){
    console.log("\033[38;2;0;255;255mListening on http://localhost:" + app.get("port"));
})