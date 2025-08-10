// import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import {app} from "./app.js" // Importing the app from app.js file( and not creating of it's own instance)

dotenv.config(); // configuring the path is not necessary as it is pointng root directory itself
// const app = express()

connectDB()  // Then and catch are used to respond to the promises after async await
.then(() =>{   
    app.listen(process.env.PORT || 8000,  () => {
        console.log(`Server is running at ${process.env.PORT}`);
    });
})
.catch( (error) => {
    console.log("MogoDB connection failed",error);
})






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