import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// Middle ware :- code that sits between the request and the response in an application
// Therefore we are configuring our middlewares, i.e., cors and cookie parser
// Middleware is like, when we are sending some request and handling it with a respose , we can implement
// a check between them like for example, whether the user is logged in or not? 
// (err,req,res,next) :-> next is used to point to the next middleware 
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
})); // Cors use for cross origination connection

app.use(express.json({ // We are configuring to get a total of 16kb data(getting this much data)
    limit : "16kb"
}));

app.use(express.urlencoded({
    extended : true,
    limit : "16kb"
}));  

app.use(express.static("public")); // Used to store static files, i.e., pdf,favicon etc

app.use(cookieParser()); // Options inside it is not required

const app = express()


export { app } // exported the required app