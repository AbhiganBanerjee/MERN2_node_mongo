//import the express module
import * as express from "express";

//import dotenv
import * as dotenv from 'dotenv';
dotenv.config();

//Get the PORT and MONGO_URI
const port:any = process.env.PORT;
const mongoUrl:any = process.env.MONGO_URI;

//import the mongoclient
import { MongoClient } from "mongodb";

//Create this as a sub-module
const getGames:any = express.Router();

//Create a get REST request on this module
getGames.get("/",async (req:any,res:any):Promise<any>=>{
    //Create the connection with mongodb
    const clientObj:any = new MongoClient(mongoUrl);

    try{
        //Get the Datbase reference 
        const db:any = clientObj.db("node_versel");

        //Perform the find operation and get the result
        const games:any = await db.collection("games").find({}).toArray();

        //validate the results
        if(games.length > 0){
            res.status(200).json(games);
        }else{  
            res.status(404).json({"message":"Error in fetching games...!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({"Error":"Connection failed!!"});
    }
    finally{
        clientObj.close();
    }
});

//export the module
export default getGames;