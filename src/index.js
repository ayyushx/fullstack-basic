import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config(); // configuring the path is not necessary as it is pointng root directory itself
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