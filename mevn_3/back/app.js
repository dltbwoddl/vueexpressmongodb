import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vwjt7.mongodb.net/limproject?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3000,()=>{
        console.log('listen t0 3000')
    })
}).catch( err => console.log(err) )