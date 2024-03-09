//import the express module
import * as express from "express";

//import the mongoclient from mongodb
import { MongoClient } from "mongodb";

//import the dotenv
import * as dotenv from "dotenv";
dotenv.config();

//get the MONGO_URI
const url:any = process.env.MONGO_URI;

//Create a sub-module
const insertProducts:any = express.Router();

//Create a POST REST service
insertProducts.post("/",async (req:any,res:any):Promise<any>=>{
    //Connect with mongodb first
    const clientObj:any = new MongoClient(url);

    try{
        //Get the Database reference
        const db:any = clientObj.db("node_versel");

        //Perform the insertion operation based on req body and insertOne function
        const result:any = await db.collection("products").insertOne(
            {
                "id": req.body.id,
                "title": req.body.title,
                "price": req.body.price,
                "category": req.body.category,
                "image": req.body.image
            }
        );

        //validate results
        if(result.insertedId){
            res.status(200).json(result);
        }else{
            res.status(404).json({"Error":"Insertion Failed...!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({"Error":"Connection not established..!"});
    }finally{
        clientObj.close();
    }
});

//export the module
export default insertProducts;