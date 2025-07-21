import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({path : "./env"});
const app = express()

connectDB()






//Commented out for my own reference 
// ;( async function(){
//     try{
//         await mongoose.connect(`${process.env.URI}`);
//         app.on("Error" , (error) => { 
//             console.error("error" , error);
//             throw error;
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log(`App is running on port: ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error(error);
//         throw error;
//     } 
// })();