"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import the express module
var express = require("express");
//import the bodyparser
var bodyParser = require("body-parser");
//import the cors module
var cors = require("cors");
//import dotenv
var dotenv = require("dotenv");
//import the sub-modules here
var GetGames_1 = require("./modules/games/GetGames");
var InsertGames_1 = require("./modules/games/InsertGames");
var GetAnimes_1 = require("./modules/animes/GetAnimes");
var InsertAnimes_1 = require("./modules/animes/InsertAnimes");
var GetBooks_1 = require("./modules/books/GetBooks");
var InsertBooks_1 = require("./modules/books/InsertBooks");
var GetAccess_1 = require("./modules/accesories/GetAccess");
var InsertAccess_1 = require("./modules/accesories/InsertAccess");
var GetProducts_1 = require("./modules/products/GetProducts");
var InsertProducts_1 = require("./modules/products/InsertProducts");
dotenv.config();
//Get the PORT and MONGO_URI
var port = process.env.PORT;
var mongoUrl = process.env.MONGO_URI;
//Create a REST Object
var app = express();
//Add the CORS policy 
app.use(cors());
//Add the bodyParser json type and urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//use the modules here
app.use("/getGames", GetGames_1.default);
app.use("/insertGames", InsertGames_1.default);
app.use("/getAnimes", GetAnimes_1.default);
app.use("/insertAnimes", InsertAnimes_1.default);
app.use("/getBooks", GetBooks_1.default);
app.use("/insertBooks", InsertBooks_1.default);
app.use("/getAccess", GetAccess_1.default);
app.use("/insertAccess", InsertAccess_1.default);
app.use("/getProducts", GetProducts_1.default);
app.use("/insertProducts", InsertProducts_1.default);
//Start the server
app.listen(port, function () {
    console.log("Server Started at port : ".concat(port));
});
