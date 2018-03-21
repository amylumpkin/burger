const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main", extname: "handlebars" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const burgerRoutes = require("./controllers/burgerController");
app.use("/burger", burgerRoutes);

app.get("/",(req, res) => { res.redirect("/burger")});

const PORT = process.env.PORT || process.argv[2] || 8080;
app.listen(PORT, function() {
  console.log("App now listening on port:" + PORT);
});
