const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // <-- ADD THIS LINE
var items = ["dsa", "oops", "dbms"];
app.get('/', function(req, res) {
    res.render("list", { ejes: items });
});
app.post("/", function(req, res) {
    var newItem = req.body.ele1;
    items.push(newItem);
    res.redirect("/");
});
app.listen(5050, function() {
    console.log('Server is running on port 3000');
});