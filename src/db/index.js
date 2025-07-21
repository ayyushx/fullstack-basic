import mongoose from "mongoose"
import express from "express"

const connectDB = async () => {
    try{
        const mongoInstance = mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Connection created : " ${mongoInstance}`)

    }catch( error ){
        console.log("error", error);
        process.exit(1); // This is an inbuilt function provided by JS
    }
}


export default connectDB;