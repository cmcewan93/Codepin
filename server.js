// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');

const db = require('./database');

// Cookie session setup
app.use(cookieSession({
  name: "session",
  keys: ["CKK"],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const loginRoutes = require("./routes/login");
const logoutRoutes= require("./routes/logout");
const registerRoutes = require("./routes/register");
const myResourceRoutes = require("./routes/my_resources");

const usersRoutes = require("./routes/users");
const apiResourcesRoutes = require("./routes/apiResources");
const resourcesRoutes = require("./routes/resources");
const widgetsRoutes = require("./routes/widgets");


// const renderResources = require("./routes/resources");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/login", loginRoutes(db));
app.use("/logout", logoutRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/my_resources", myResourceRoutes(db));

app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

//local apis
app.use("/api/resources", apiResourcesRoutes(db));

//rendering our page with data
app.use("/resources", resourcesRoutes());

// app.use("/resources", resourcesRoutes(db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});




app.listen(PORT, () => {
  console.log(`Codepin app listening on port ${PORT}`);
});
