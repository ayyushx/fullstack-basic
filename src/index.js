import mongoose from "mongoose"
import express from "express"

const app = express()

;( async function(){
    try{
        await mongoose.connect(`${process.env.URI}`);
        app.on("Error" , (error) => { 
            console.error("error" , error);
            throw error;
        })
        app.listen(process.env.PORT , ()=>{
            console.log(`App is running on port: ${process.env.PORT}`);
        })
    }catch(error){
        console.error(error);
        throw error;
    } 
})();