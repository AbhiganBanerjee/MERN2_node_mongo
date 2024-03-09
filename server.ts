//import the express module
import * as express from "express";

//import the bodyparser
import * as bodyParser from "body-parser";

//import the cors module
import * as cors from "cors";

//import dotenv
import * as dotenv from 'dotenv';

//import the sub-modules here
import getGames from "./modules/games/GetGames";
import insertGames from "./modules/games/InsertGames";
import getAnimes from "./modules/animes/GetAnimes";
import insertAnimes from "./modules/animes/InsertAnimes";
import getBooks from "./modules/books/GetBooks";
import insertBooks from "./modules/books/InsertBooks";
import getAccess from "./modules/accesories/GetAccess";
import insertAccess from "./modules/accesories/InsertAccess";
import getProducts from "./modules/products/GetProducts";
import insertProducts from "./modules/products/InsertProducts";

dotenv.config();

//Get the PORT and MONGO_URI
const port:any = process.env.PORT;
const mongoUrl:any = process.env.MONGO_URI;

//Create a REST Object
const app:any = express();

//Add the CORS policy 
app.use(cors());

//Add the bodyParser json type and urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//use the modules here
app.use("/getGames",getGames);
app.use("/insertGames",insertGames);

app.use("/getAnimes",getAnimes);
app.use("/insertAnimes",insertAnimes);

app.use("/getBooks",getBooks);
app.use("/insertBooks",insertBooks);

app.use("/getAccess",getAccess);
app.use("/insertAccess",insertAccess);

app.use("/getProducts",getProducts);
app.use("/insertProducts",insertProducts);


//Start the server
app.listen(port,():any=>{
    console.log(`Server Started at port : ${port}`);
});