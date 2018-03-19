const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const burgerRoutes = require("./controllers/burgersController");
app.use("/burgers", burgerRoutes); //requests have to come from my website/burgers...this is the home page

app.get("/", (req, res) => { res.redirect("/burgers")}); 

const PORT = process.env.PORT || process.argv[2] || 8080;
app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT);
});