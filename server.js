var express = require("express");
var exphbs = require("express-handlebars");
var logger = require("morgan");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Handlebars
app.set('views', './views')
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require('./routes/apiRoutes')(app)

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});