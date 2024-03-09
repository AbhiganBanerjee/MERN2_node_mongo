//import the express module
import * as express from "express";

//import the mongoclient
import { MongoClient } from "mongodb";

//import the dotenv module
import * as dotenv from "dotenv";
dotenv.config();

//Get the mongo url
const url:any = process.env.MONGO_URI;

//Create this as a sub-module
const getBooks:any = express.Router();

//Create a GET REST Service 
getBooks.get("/",async (req:any,res:any):Promise<any>=>{
    //Connect to mongodb
    const clientObj:any = new MongoClient(url);

    try{ 
        //Get the datbase reference 
        const db:any = clientObj.db("node_versel");

        //Perform find operation on the collection
        const books:any = await db.collection("books").find({}).toArray();

        //validate the result
        if(books.length>0){
            res.status(500).json(books);
        }else{
            res.status(404).json({"Error":"Error in Fetching books..!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({"Error":"Connection failed..!"});
    }
    finally{
        clientObj.close();
    }
});

//export this module
export default getBooks;